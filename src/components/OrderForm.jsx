import React, {useState} from 'react';
import styled from 'styled-components';
import {Category, Price, Title} from './StyledItem';
import Button from './Button';
import Input from './Input';
import {useDispatch, useSelector} from 'react-redux';
import {sendOrder} from '../store/actions/orderActions';

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
  
  &:hover:not([disabled]) {
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
  const [userData, setUserData] = useState({name:"", number:""});

  const selectedProduct = useSelector(state => state.product.selectedProduct);
  const orderLoading = useSelector(state => state.order.orderLoading);
  const orderError = useSelector(state => state.order.orderError);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setUserData({...userData, [e.target.name]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendOrder(userData));
    setUserData({name:"", number:""});
  };

  return (
    <StyledOrderForm onSubmit={handleSubmit}>
      {selectedProduct &&
      <>
        <Item>
          <Category>{selectedProduct.category}</Category>
          <Title>{selectedProduct.name}</Title>
          <Price>{selectedProduct.price}</Price>
        </Item>
        <StyledInput value={userData.name} onChange={handleInputChange} name="name" block placeholder="Name"/>
        <StyledInput type="number" value={userData.number} onChange={handleInputChange} name="number" block placeholder="Number"/>
        <StyledSubmitButton disabled={orderLoading} type="submit" block><span>ORDER</span></StyledSubmitButton>
      </>
      }

    </StyledOrderForm>
  );
};

export default OrderForm;
