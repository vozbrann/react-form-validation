import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import {setSelectedProduct} from '../store/actions/productActions';

import {Category, Title, Price} from './StyledItem';
import {useDispatch} from 'react-redux';

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

const Card = ({product}) => {
  const {name, category, price} = product;

  const dispatch = useDispatch();

  const handleSelectProduct = () => {
    dispatch(setSelectedProduct(product));
  };

  return (
    <StyledCard>
      <Category>{category}</Category>
      <Title>{name}</Title>
      <CardBottom>
        <Price>{price}</Price>
        <div>
          <Button onClick={handleSelectProduct} variant="light" size="sm">BUY</Button>
        </div>
      </CardBottom>
    </StyledCard>
  );
};

export default Card;
