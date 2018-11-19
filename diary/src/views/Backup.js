import React from 'react';
import '../App.css';

const Backup = () => {

  return (
  <div>
    <div className="main">
      <p>最後にバックアップした日</p>
      <input disabled = {true} type = 'text' value = ''/>
    </div>
    <div>
      <input type = 'button' className = 'button' value = 'バックアップ'/>
    </div>
  </div>
  )
}

export default Backup;
