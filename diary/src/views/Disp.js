import React from 'react'
import twitter from '../image/twitter.png'
import '../App.css'

const Disp = () => {

  const days = [
    {year:"2018", day:"11/1", dow:"(月)"},
    {year:"2018", day:"11/2", dow:"(火)"},
    {year:"2018", day:"11/3", dow:"(水)"},
    {year:"2018", day:"11/4", dow:"(木)"},
    {year:"2018", day:"11/5", dow:"(金)"},
    {year:"2018", day:"11/6", dow:"(土)"},
    {year:"2018", day:"11/7", dow:"(日)"}
  ]
  
  const list = days.map((days,index) => 
    <div className="single_area" key={index}>
      <div className="disp_content">
        <div className="disp_year">{days.year}</div>
        <div className="disp_day">{days.day}</div>
        <div className="disp_dow">{days.dow}</div>
      </div>
      <div className="disp_content_main">
        <div className="content">日記の内容を表示</div>
      </div>
      <div className="disp_content">
        <img src={twitter} className="App-image" alt="twitter"/>
      </div>
    </div>
  );

  return (
    <div className="disp_area">
      <div>{list}</div>
    </div>
  );
}

export default Disp;
