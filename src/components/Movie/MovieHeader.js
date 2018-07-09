import React from 'react';
import styled from 'styled-components';

const Header = styled.h4`
  text-align: left;
`;

const MovieHeader = ({ title, rating, release }) => {
  const year = new Date(release).getFullYear();
  return (
  <Header>({year}) {title} - ({rating}/10)</Header>
)};

export default MovieHeader;
