import React from 'react';
import styled from 'styled-components';

const imageBase = 'https://image.tmdb.org/t/p/w500';

const MovieWrapper = styled.img`
  width: 200px;
`;

const MoviePoster = ({ poster }) => (
  <MovieWrapper src={imageBase + poster} />
);

export default MoviePoster;
