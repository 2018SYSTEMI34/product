import React from 'react';
import '../App.css';

const Input = () => {
  return (
    <div>
      <div className="main">
        <div className="input">
          <input type="date" />
        </div>
        <div>
          <textarea classaname="input" cols="45" rows="25" maxlength="" placeholder="日記を入力"></textarea>
        </div>
        <input type="button" className="button" value="  保  存 "/>
      </div>
    </div>
  );
}

export default Input;
