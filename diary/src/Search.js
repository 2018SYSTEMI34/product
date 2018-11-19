import React from 'react';
import './App.css';

const Search = () => {

  const labSpace = {display: 'inline-block'}

  return (
  <div className="main">
    <div className="search-title">検索条件</div>
    <div className="search-date">
      <input type = 'date' className = 'Startday'/>〜　
      <input type = 'date' className = 'Endday'/>
    </div>
    <div className="search-week"> 
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Sunday' value = '1'/>日
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Monday' value = '2'/>月
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Tuesday' value = '3'/>火
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Wednesday' value = '4'/>水
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Thursday' value = '5'/>木
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Friday' value = '6'/>金
      </label>
      <label style = {labSpace}>
        <input type = 'checkbox' className = 'Saturday' value = '7'/>土
      </label>
    </div>
    <div>
      <input type = 'button' className = 'button' value = '  検  索  '/>
    </div>
  </div>
  )
}

export default Search;
