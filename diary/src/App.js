import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import Footer from './Footer.js'
import Disp from './Disp.js'
import Search from './Search.js'
import Input from './Input.js'
import Backup from './Backup.js'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path='/Disp' component={Disp} /> 
            <Route exact path='/Search' component={Search} />
            <Route exact path='/Input' component={Input} />
            <Route exact path='/Backup' component={Backup} />
            <Redirect to = "/Disp" />
          </Switch>
        </div>
        <Footer />
      </div>
      </BrowserRouter>     
    );
  }
}

export default App;
