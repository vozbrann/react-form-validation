import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledCard = styled.div`
  background-color: #fff;
  padding: 2em;
  border-radius: 24px;
`;

const Category = styled.p`
 color: rgba(0,0,0,0.5);
 text-transform: uppercase;
 margin-bottom: 8px;
`;

const CardTitle = styled.p`
 font-size: 40px;
 margin-bottom: 40px;
`;

const CardPrice = styled.span`
 font-size: 60px;
 &:before {
   content: "$";
   vertical-align: 50%;
   font-size: 30px;
 }
`;

const CardBottom = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

const Card = () => {
  return (
    <StyledCard>
      <Category>Drinks</Category>
      <CardTitle>Orange Juice</CardTitle>
      <CardBottom>
        <CardPrice>14.99</CardPrice>
        <div>
          <Button variant="light" size="sm">BUY</Button>
        </div>
      </CardBottom>
    </StyledCard>
  );
};

export default Card;
