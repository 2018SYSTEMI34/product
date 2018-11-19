import React, { Component } from 'react'
import './App.css'
import Header from './views/Header.js'
import Footer from './views/Footer.js'
import Disp from './views/Disp.js'
import Search from './views/Search.js'
import Input from './views/Input.js'
import Backup from './views/Backup.js'
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
