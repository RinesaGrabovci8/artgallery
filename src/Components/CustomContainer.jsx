import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-inline:150px;

`

const CustomContainer = ({ children, style }) => {
  return (
    <Container  style={{...style}}>
      {children}
    </Container>
  );
};

export default CustomContainer;
