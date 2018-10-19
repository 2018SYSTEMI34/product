import React from 'react';

const Backup = () => {

  return (
  <div style = {{width: '300px'}}>
    <div style = {{textAlign: 'center', width: '200px', marginTop: 70, marginLeft: 50}}>
      <label>最後にバックアップした日</label>
      <input disabled = {true} type = 'text' value = ''/>
    </div>
    <div style = {{textAlign: 'center', width: '100px', marginTop: 100, marginLeft: 100}}>
      <input type = 'button' className = 'ActionButton' value = 'バックアップ'/>
    </div>
  </div>
  )
}

export default Backup;
