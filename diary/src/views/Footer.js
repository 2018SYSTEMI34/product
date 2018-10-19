import React, { Component } from 'react';
import home from './image/home.svg'
import search from './image/search.svg'
import registration from './image/registration.svg'
import backup from './image/backup.svg'
import '../App.css';

//フッター
class Footer extends Component{
  render (){
    return (
      <footer className="App-footer">
        <ul className="footer-ul"> 
          <li className="footer-menu">
            <li className="footer-menu-li"><img src={home} className="App-image" alt="home"/></li>
            <li className="footer-menu-li">ホーム</li>
          </li>
          <li className="footer-menu">
            <li className="footer-menu-li"><img src={search} className="App-image" alt="search"/></li>
            <li className="footer-menu-li">検索</li>
          </li>
          <li className="footer-menu">
            <li className="footer-menu-li"><img src={registration} className="App-image" alt="registration"/></li>
            <li className="footer-menu-li">日記を書く</li>
          </li> 
          <li className="footer-menu">
            <li className="footer-menu-li"><img src={backup} className="App-image" alt="backup"/></li>
            <li className="footer-menu-li">バックアップ</li>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;