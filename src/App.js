import React, {Component} from 'react';
import axios from 'axios';

import './App.css';
import Form from "./components/Form.js";


class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    let promise = axios.get( baseUrl );
  }




  render() {
    return (
    <div className="App">

      <Form />
    
   </div>
    )
  }
}

export default App;
