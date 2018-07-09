import React, {Component, Fragment} from 'react';
import axios from 'axios';
import styled from 'styled-components';

/**
 * Components imports
 */
import Header from './components/Header.js';
// import Form from "./components/Form.js";
import MovieList from "./components/MovieList";
import Comments from './components/Comments/Comments';

/**
 * Component styles
 */
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-around;
`;

class Container extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      comments: [],
      comment: '',
    }
  }

  componentDidMount() {
    let promise = axios.get( "http://localhost:5353/api/movies" );
    promise.then(( results ) => {
      this.setState({ movies: results.data.data })
    })
  }

  addComment = (comment, movie_id) => {
    axios.post(`http://localhost:5353/api/movies/`, { comment, movie_id }).then(res => {
      this.setState({
        comments: res.data.data,
      })
      const test = document.getElementById("comment");
      console.log(test, 'test');
    })
  }

  updateComment = (comment, comment_id, movieId) => {
    console.log('movieId', movieId);
    axios.put(`http://localhost:5353/api/movies/${comment_id}`, { comment, comment_id, movieId }).then(res => {
      this.setState({
        comments: res.data,
      })
      console.log(this.state.comments, 'this.state.comments')
    })
  }

  deleteComment = () => {
    axios.delete('http://localhost:5353/api/movies/').then(res => {
      this.setState({
        comments: res.data
      })
    })
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      comment: value,
    })
  }
  render() {
    const { movies, comments, comment } = this.state;
    return (
    <div className="App">
      {movies.length < 1 && <h1>Fetching movies...</h1>}
      {movies.length > 0 && (
        <Fragment>
          <Header />
          {/* <Form /> */}
          <Wrapper>
            <MovieList
              id={movies.id}
              movies={movies}
              handleChange={this.handleChange}
              comment={comment}
              updateComment={this.updateComment}
              deleteComment={this.deleteComment}
              addComment={this.addComment}
              comments={comments}
          />
          </Wrapper>
        </Fragment>
      )}
   </div>
    )
  }
}

export default Container;
