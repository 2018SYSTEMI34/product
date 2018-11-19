import React from 'react'
import twitter from './image/twitter.png'
import './App.css'


const Disp = () => {
  return (
    <div>
      <div className="disp_area">
        <div className="single_area">
        <div className="disp_content">
          <div className="disp_year">2018</div>
          <div className="disp_day">10/10</div>
          <div className="disp_dow">(金)</div>
        </div>
        <div className="disp_content_main">
          <div className="content">日記の内容を表示</div>
        </div>
        <div className="disp_content">
          <img src={twitter} className="App-image" alt="twitter"/>
        </div>
        </div>      
      </div>
    </div>
  );
}

export default Disp;
