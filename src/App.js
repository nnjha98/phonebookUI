import logo from './logo.svg';
import './App.css';
import React, { PureComponent } from 'react';
import Layout from './components/layout';
var cors = require('cors')
// var app = express()
 


class App extends React.Component {

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <Layout/>
        </header>
      </div>
    );
  }
}
 
export default App;

