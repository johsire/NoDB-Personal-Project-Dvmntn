import React from 'react';
import MovieHeader from './Movie/MovieHeader';
import MoviePoster from './Movie/MoviePoster';
import styled from 'styled-components';
import Comments from './Comments/Comments';

import { Button } from './Comments/Comments';

const Wrapper = styled.div`
	width: 200px;
	display: flex;
	padding: 20px;
	flex-direction: column;
`;

const Description = styled.p`
	font-size: 12px;
	color: #333;
	text-align: left;
	opacity: 0.8;
	width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MovieList = ({ movies, handleChange, addComment, comment, comments, updateComment, deleteComment }) => (
	movies.map(movie => {
		const id = new Date;
		return(
			<Wrapper key={movie.title}>
				<MoviePoster poster={movie.poster_path} />
				<MovieHeader title={movie.title} rating={movie.vote_average} release={movie.release_date} />
				<input id="comment" type="text" name="comment" onChange={(e) => handleChange(e)} placeholder="say something"/>
				<Button onClick={() => addComment(comment, movie.id)}>Add Comment</Button>
				<Comments comments={comments} movieId={movie.id} comment={comment} updateComment={updateComment} deleteComment={deleteComment}/>
			</Wrapper>
		)})
	);

export default MovieList;
