import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import BackgroundComponent from './BackgroundComponent';
import photo from "../assets/photo.png"; 
import OpenAI from "openai";
import OPENAI_API_KEY from '../config/openai';

// 初始化OpenAI实例
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true 
});

function PurrfessorResponseBox({ conversations }) {
  return (
    <div className="conversations-container">
      {conversations.map((conv, index) => (
        <div key={index} className="response-container">
          <p><strong>You:</strong> {conv.message}</p>
          {conv.imageUrl && (
            <img src={conv.imageUrl} alt="User Upload" style={{ maxWidth: '80%', maxHeight: '200px', margin: '10px 0' }} />
          )}
          <p><strong>Purrfessor:</strong> {conv.response}</p>
        </div>
      ))}
    </div>
  );
}

function PurrfessorHome() {
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileObject, setFileObject] = useState(null);
  const [conversations, setConversations] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setSelectedFile(URL.createObjectURL(event.target.files[0])); // 用于预览
      setFileObject(event.target.files[0]); // 存储文件对象用于上传
    }
  };
  
  
  const uploadImage = async (fileObject) => {
    const formData = new FormData();
    formData.append('file', fileObject); // 确保这里使用的是文件对象
  
    try {
      const response = await fetch('http://localhost:5050/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Failed to upload image', error);
      return null;
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let newConversation = {
      message: message,
      imageUrl: null,
      response: "",
    };
  
    try {
      if (fileObject) {
        const imageUrl = await uploadImage(fileObject);
        
        if (imageUrl) {
          newConversation.imageUrl = imageUrl;
          console.log('in PurrfessorHome Image URL:!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', imageUrl);
          // 使用图像URL请求OpenAI API
          const completion = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [
              {
                "role": "user",
                "content": [
                  { "type": "text", "text": message }, // 使用用户输入的消息
                  { "type": "image_url", "image_url": { "url": imageUrl } }
                ]
              }
            ],
            max_tokens: 300,
          });
          newConversation.response = completion.choices[0].message.content;
        } else {
          throw new Error('Image upload failed, cannot proceed with API request.');
        }
      } else {
        // 处理无图像的逻辑
        const completion = await openai.chat.completions.create({
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: message }
          ],
          model: "gpt-4",
        });
        newConversation.response = completion.choices[0].message.content;
      }
      
      setConversations([...conversations, newConversation]);
      
      await fetch(`http://localhost:5050/record`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newConversation),
      });
    } catch (error) {
      console.error("处理请求时出现错误", error);
    }
  
    // 清空输入和文件选择
    setMessage('');
    setSelectedFile(null);
    setFileObject(null);  // 清空文件对象状态
  };
  

  return (
    <div className="content-container">
    {conversations.length === 0 ? (
      <BackgroundComponent />
    ) : (
      <PurrfessorResponseBox conversations={conversations} />
    )}
      <Form onSubmit={handleSubmit} className="input-form">
      {selectedFile && <img src={selectedFile} alt="Preview" style={{ maxWidth: '80%', maxHeight: '280px' }} />}
        <InputGroup size="lg" className="input-group-custom">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="file-input"
              />
              <label htmlFor="file-input" style={{ marginBottom: 0 }} >
                <img src={photo} alt="Upload" style={{ cursor: 'pointer' }} className="upload-icon"/>
              </label>
          <Form.Control 
            type="text" 
            placeholder="Type your message here..." 
            value={message}
            onChange={handleMessageChange}
            style={{ fontSize: '18px' }}  // Inline style for font size
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
          <Button variant="success" type="submit" className="btn-custom">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
            </svg>
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export default PurrfessorHome;
