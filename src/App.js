import React, {Component} from 'react';
import axios from 'axios';

import './App.css';
import Form from "./components/Form.js";
import MoviesList from 


class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    let promise = axios.get( baseUrl );

    promise.then(( results ) => {
      this.setState({ movies: results.data })
    })
  }




  render() {
    const { movies } = this.state;
    return (
    <div className="App">

      <Form />
    
   </div>
    )
  }
}

export default App;
