import logo from './logo.svg';
import './App.css';
import React, { PureComponent } from 'react';
import Layout from './components/layout';
var cors = require('cors')
// var app = express()
 


class App extends React.Component {

  render() { 
    return (
      <div className="App AnimatedBody"  style={{height:"max(100%,100vh)"}}>
        <header className="App-header" style={{height:"max(100%,100vh)"}}>
          <Layout/>
        </header>
      </div>
    );
  }
}
 
export default App;

