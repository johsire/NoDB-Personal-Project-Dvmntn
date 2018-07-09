import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  text-align: center;
  font-size: 32px;
  color: purple;
  font-weight: 600;
  letter-spacing: 12px;
  text-transform: uppercase;
`;
const Header = () => <Title>Movienator</Title>;

export default Header;
