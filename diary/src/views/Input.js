import React from 'react';

const Input = () => {
  return (
    <div>
      <div className="input_area">
        <div className="date_area">
          <input type="date">
        </div>
        <div className="content">
          <textarea></textarea>
        </div>
        <div className="button_area">
          <input type="button" value="保存"/>
        </div>
      </div>
    </div>
  );
}

export default Input;
