import React from 'react';
import styled from 'styled-components';

const StyledComponent = () => {
  return (
  <Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
  <Button>styled Button</Button>
</Wrapper>
  )
}
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
 
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
 
const Button = styled.button`
background: red;
`

export default StyledComponent