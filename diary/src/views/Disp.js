import React from 'react';
import twitter from './twitter.png';

const Disp = () => {
  return (
    <div className="">
      <div className="disp_area">
        <div className="single_area">
          <div className="disp_date">
            <div className="disp_year">2018</div>
            <div className="disp_day">10/10</div>
            <div className="disp_dow">(水)</div>
          </div>
          <div className="disp_content">
            <div className="content">日記の内容を表示</div>
          </div>
          <div className="disp_icon">
            <img src={twitter} alt="twitter"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disp;
