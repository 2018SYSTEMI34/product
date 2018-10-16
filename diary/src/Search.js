import React from 'react';

const Search = () => {

  const labSpace = {display: 'inline-block'}

  return (
  <div style = {{width: '300px'}}>
    <div style = {{textAlign: 'left', marginTop: 50}}>
      <label>検索条件</label>
    </div>
    <div style = {{textAlign: 'center', width: '200px', marginTop: 20, marginLeft: 50}}>
      <input type = 'date' className = 'Startday'/>
      <input type = 'date' className = 'Endday'/>
    </div>
    <div style = {{width: '200px', marginTop: 20, marginLeft: 50}}>
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
    <div style = {{textAlign: 'center', width: '100px', marginTop: 100, marginLeft: 100}}>
      <input type = 'button' className = 'SearchButton' value = '  検  索  '/>
    </div>
  </div>
  )
}

export default Search;
