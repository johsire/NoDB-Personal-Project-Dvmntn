const axios = require('axios');
const baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=<>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const uuidv4 = require('uuid/v4');

let id = 0;
let movies = [];
let comments = [];

module.exports = {
  all: ( req, res ) => {
    // make request to axios 
      let promise = axios.get(baseUrl);
      promise.then(( response ) => {
        movies = response.data.results;
        res.status(200).json({
          data: movies,
        });
      })

      .catch((error) => {
        return res.status(500).json({ success: false, data: error });
      });
  },
  create: ( req, res ) => {
    const id = uuidv4();
    const { comment, movie_id } = req.body;

    comments.push({ id, comment, movie_id });
    res.status(200).json({
      data: comments,
    });

  },

  // ONE
  one: ( req, res ) => {
    // make request to axios 
  },

  // UPDATE
  update: ( req, res ) => {
    // make request to axios 
    const { comment, comment_id, movieId } = req.body;
    console.log(req.body, 'THIS IS WHAT IS COMING THROUHG');

    const commentToUpdate = comments.filter((c) => c.id == comment_id)
    const test = commentToUpdate;
    console.log('test', test);
    const index = comments.indexOf(commentToUpdate[0]);
    if (index !== -1) comments[index] = {
      id: comment_id,
      comment,
      movie_id : movieId,
    }

    //return comments with updated comment
    res.status(200).send(comments)


  },

  // DELETE
  delete: ( req, res ) => {
    const {comment_id } = req.body;
    let deleteId = comment_id;
    commentId = comments.filter(item => item.id === deleteId);
    comments.splice(commentId, 1);
    res.status(200).send(comments);
  }
}
