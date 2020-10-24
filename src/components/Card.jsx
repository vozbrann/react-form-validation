import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import {Category, Title, Price} from './StyledItem';

const StyledCard = styled.div`
  background-color: #fff;
  padding: 2em;
  border-radius: ${props => props.theme.borderRadius.large};
`;

const CardBottom = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-top: 40px;
`;

const Card = () => {
  return (
    <StyledCard>
      <Category>Drinks</Category>
      <Title>Orange Juice</Title>
      <CardBottom>
        <Price>14.99</Price>
        <div>
          <Button variant="light" size="sm">BUY</Button>
        </div>
      </CardBottom>
    </StyledCard>
  );
};

export default Card;
