import React from 'react';
import '../App.css';

const Search = () => {

  const labSpace = {display: 'inline-block'}

  return (
  <div className="main">
    <div className="search-title">検索条件</div>
    <div className="search-date">
      <input type = 'date' className = 'Startday'/>〜　
      <input type = 'date' className = 'Endday'/>
    </div>
    <div className="search"> 
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Sunday' value = '0'/>日
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Monday' value = '1'/>月
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Tuesday' value = '2'/>火
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Wednesday' value = '3'/>水
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Thursday' value = '4'/>木
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Friday' value = '5'/>金
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Saturday' value = '6'/>土
      </label>
    </div>
    <div className="search">
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Category0' value = '0'/>仕事
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Category1' value = '1'/>学校
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Category2' value = '2'/>趣味
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Category3' value = '3'/>遊び
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Category4' value = '4'/>その他
      </label>
    </div>
    <div className="search">
      <label style = {labSpace}>キーワード検索
        <input type = 'checkbox' className = 'Keyword0' value = '0'/>
        <input type = 'text' className = 'input' value = ''/>
      </label>
    </div>
    <div>
      <input type = 'button' className = 'button' value = '  検  索  '/>
    </div>
  </div>
  )
}

export default Search;