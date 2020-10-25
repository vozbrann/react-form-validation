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

const ErrorMessage = styled.p`
  color: red;
  margin-top: 15px;
`;

const nameValidation = (name) => {
  if (name.trim() === '') {
    return 'This field in required';
  }
  if (/[^a-zA-Z -]/.test(name)) {
    return 'Only letters allowed';
  }
  return null;
};

const numberValidation = number => {
  if (number.trim() === '') {
    return 'This field in required';
  }
  if (!/^\d+$/.test(number)) {
    return 'Only numbers allowed';
  }
  if (number.trim().length !== 12) {
    return 'Should contain 12 characters';
  }
  return null;
};

const validate = {
  name: nameValidation,
  number: numberValidation,
};

const OrderForm = () => {
  const [userData, setUserData] = useState({name: '', number: ''});

  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});

  const selectedProduct = useSelector(state => state.product.selectedProduct);
  const orderLoading = useSelector(state => state.order.orderLoading);
  const orderError = useSelector(state => state.order.orderError);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const clearInput = (name) => {
    setUserData({...userData, [name]: ""});
  };

  const handleBlur = (e) => {
    const {name, value} = e.target;
    // remove whatever error was there previously
    const {[name]: removedError, ...rest} = errors;

    // check for a new error
    const error = validate[name](value);

    // // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && {[name]: touched[name] && error}),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate the form
    const formValidation = Object.keys(userData).reduce(
      (acc, key) => {
        const newError = validate[key](userData[key]);
        const newTouched = {[key]: true};
        return {
          errors: {
            ...acc.errors,
            ...(newError && {[key]: newError}),
          },
          touched: {
            ...acc.touched,
            ...newTouched,
          },
        };
      },
      {
        errors: {...errors},
        touched: {...touched},
      },
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && // errors object is empty
      Object.values(formValidation.touched).length ===
      Object.values(userData).length && // all fields were touched
      Object.values(formValidation.touched).every(t => t === true) // every touched field is true
    ) {
      dispatch(sendOrder(userData));
      setUserData({name: '', number: ''});
    }
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
        <StyledInput
          value={userData.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          clearInput={() => clearInput("name")}
          name="name"
          block
          placeholder="Name"
          error={touched.name && errors.name}
        />
        <StyledInput
          type="text"
          value={userData.number}
          onChange={handleInputChange}
          onBlur={handleBlur}
          clearInput={() => clearInput("number")}
          name="number"
          block
          placeholder="Number"
          error={touched.number && errors.number}
        />
        <StyledSubmitButton disabled={orderLoading} type="submit"
                            block><span>{orderLoading ? "Loading..." : "ORDER"}</span></StyledSubmitButton>
        {orderError&&
          <ErrorMessage>{orderError.message}</ErrorMessage>
        }
      </>
      }

    </StyledOrderForm>
  );
};

export default OrderForm;
