import React, {Component} from 'react';
// import styled from 'styled-components';
import Container from './Container';
// import logo from './logo.svg';
import Header from './components/Header.js';
import MoviePoster from './components/Movie/MoviePoster';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Container/>
          {/* <Header/> */}
          {/* <MoviePoster /> */}
          
      </div>
    );
  }
}

export default App;


// const App = ()=>(
//   <Container/>
// );

// export default App;