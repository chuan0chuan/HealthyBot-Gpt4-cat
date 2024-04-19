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
    <div className="conversations-container"> {/* This container will scroll if content is too long */}
      {conversations.map((conv, index) => (
        <div key={index} className="response-container">
          <p><strong>You:</strong> {conv.message}</p>
          <p><strong>Purrfessor:</strong> {conv.response}</p>
        </div>
      ))}
    </div>
  );
}

function PurrfessorHome() {
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [conversations, setConversations] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFileChange = (event) => {
    // 处理文件选择
    if (event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      // 这里可以添加上传逻辑
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(OpenAI); // 测试OpenAI是否被正确导入
    console.log(openai); // 测试openai实例是否可用

    // 处理文本消息
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: message }, // 使用用户输入的消息
        ],
        model: "gpt-4",
      });
      console.log(completion.choices[0].message.content); // 打印GPT API的响应
      const newConversation = {
        message: message,
        response: completion.choices[0].message.content,
      };
      setConversations([...conversations, newConversation]);// Update the response state
    } catch (error) {
      console.error("GPT API请求错误", error);
    }
  
    // 假设性的文件处理逻辑
    if (selectedFile) {
      // 1. 上传文件到您的服务器或第三方服务以获取图像的文本描述。
      // 2. 将获取的文本描述作为prompt发送到OpenAI API（如上所示）。
  
      console.log("文件处理逻辑尚未实现。");
    }
  
    // 清空输入
    setMessage('');
    setSelectedFile(null);
  };

  return (
    <div className="content-container">
    {conversations.length === 0 ? (
      <BackgroundComponent />
    ) : (
      <PurrfessorResponseBox conversations={conversations} />
    )}
      <Form onSubmit={handleSubmit} className="input-form">
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
