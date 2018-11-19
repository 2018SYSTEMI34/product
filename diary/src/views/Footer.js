import React, { Component } from 'react'
import home from './image/home.svg'
import search from './image/search.svg'
import registration from './image/registration.svg'
import backup from './image/backup.svg'
import '../App.css'
import { Link } from 'react-router-dom'

//フッター
class Footer extends Component{
  render (){
    return (
      <footer className="App-footer">
        <ul className="footer-ul"> 
          <li className="footer-menu">
            <Link to="/Disp">
            <li className="footer-menu-li"><img src={home} className="App-image" alt="home"/></li>
            <li className="footer-menu-li">ホーム</li>
            </Link>
          </li>
          <li className="footer-menu">
            <Link to="/Search">
            <li className="footer-menu-li"><img src={search} className="App-image" alt="search"/></li>
            <li className="footer-menu-li">検索</li>
            </Link>
          </li>
          <li className="footer-menu">
            <Link to="/Input">
            <li className="footer-menu-li"><img src={registration} className="App-image" alt="registration"/></li>
            <li className="footer-menu-li">日記を書く</li>
            </Link>
          </li> 
          <li className="footer-menu">
            <Link to="/Backup">
            <li className="footer-menu-li"><img src={backup} className="App-image" alt="backup"/></li>
            <li className="footer-menu-li">バックアップ</li>
            </Link>
          </li>
        </ul>

        

      </footer>
    );
  }
}

export default Footer;