import React, { Fragment } from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    background: #bbb;
    padding: 10px;
    font-size: 0.8rem;
    margin-top: 20px;
    cursor: pointer;
    border: none;
`;

const Comments = ({ comments, movieId, updateComment, comment, deleteComment }) => {
  let myComments = comments.filter((comment) => {
    if(comment.movie_id === movieId){
      return comment.comment;
    }
  })
  const correctComments = myComments.map(c => 
    <Fragment>
      <p>{c.comment}</p>
      <Button onClick={() => updateComment(comment, c.id, movieId)}>Update</Button>
      <Button onClick={() => deleteComment(comment, c.id)}>Delete</Button>
    </Fragment>
  )
  return correctComments;
}

export default Comments;