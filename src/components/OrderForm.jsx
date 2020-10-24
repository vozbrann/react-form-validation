import React from 'react';
import styled from 'styled-components';
import {Category, Price, Title} from './StyledItem';
import Button from './Button';
import Input from './Input';

const StyledOrderForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin-bottom: 16px;
`;

const StyledSubmitButton = styled(Button)`
  margin-top: 16px;
  span {
    transition: 0.2s;
    position: relative;
    display: inline-block;
    &:after {
      position: absolute;
      font-family: 'Material Icons';
      content: "arrow_forward";
      margin-left: 4px;
      visibility: hidden;
      opacity: 0;
      transition: 0.2s;
      right: 0;
    }
  }
  
  &:hover {
    span {
      transform: translate(-8px, 0);
      &:after {
        visibility: visible;
        opacity: 1;
        transform: translate(16px, 0);
      }
    }
  }
`;

const Item = styled.div`
  margin-bottom: 32px;
  text-align: center;
`;

const OrderForm = () => {
  return (
    <StyledOrderForm>
      <Item>
        <Category>Drinks</Category>
        <Title>Orange Juice</Title>
        <Price>14.99</Price>
      </Item>
      <StyledInput error="Name should not contain a numbers" block placeholder="Name"/>
      <StyledInput block placeholder="Number"/>
      <StyledSubmitButton block><span>ORDER</span></StyledSubmitButton>
    </StyledOrderForm>
  );
};

export default OrderForm;
