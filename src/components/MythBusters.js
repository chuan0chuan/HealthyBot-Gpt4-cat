import React, { useState } from 'react';
import BackgroundComponent from './BackgroundComponent';

function MythBusters() {
  // 假设这是你的关键字和内容数据
  const keywords = ['Keyword 1', 'Keyword 2', 'Keyword 3', 'Keyword 4', 'Keyword 5', 'Keyword 6',  'Keyword 7'];
  const [selectedKeyword, setSelectedKeyword] = useState(keywords[0]); // 默认选中第一个关键字

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
  }; 

  return (
    <div className="content-container">
        <BackgroundComponent transparent={true}/>
      <div className="keywords-container">
        {/* 左侧框框 */}
        <div className="keywords-box">
          {/* 上半部分：关键字列表 */}
          <div style={{ overflowY: 'auto' }}>
            <h2>Red flags for misleading claims</h2>
            <ul>
          {keywords.map((keyword, index) => (
            <li key={index} style={{ cursor: 'pointer', listStyleType: 'none' }} onClick={() => handleKeywordClick(keyword)}>
              {keyword}
            </li>
          ))}
        </ul>
          </div>
        </div>
        {/* 右侧框框 */}
        <div className="keywords-box keywords-box-large">
          {/* 下半部分：关键字列表 */}
          <div style={{ overflowY: 'auto' }}>
            <h2>Selected Keyword: {selectedKeyword}</h2>
            <p>Content of {selectedKeyword}</p>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default MythBusters;
