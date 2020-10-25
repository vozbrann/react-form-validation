import React from 'react';
import styled, {css} from 'styled-components';

const InputContainer = styled.div`
  width: 100%;
  position: relative;
  ${({ error }) =>
  (error &&
  css`
      &:after {
        position: absolute;
        font-family: 'Material Icons';
        font-size: ${props => props.theme.colors.gray};
        content: "close";
        right: -5px;
        top: -5px;
        color: white;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.danger};
        padding: 4px;
      }
  `)}
`;

const StyledInput = styled.input`
  display: inline-block;
  width: ${props => props.block ? "100%" : "auto"};
  outline: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 16px 16px 14px;
  transition: 0.2s;
  border: 1px solid rgba(0,0,0,0.2);
  
  &::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance: textfield;
  }
  
  &:focus, :hover {
    border-color: ${props => props.error ? props.theme.colors.danger : props.theme.colors.primary};
  }
  
  ${({ error }) =>
    error &&
    css`
      &, &:focus, :hover {
        border-color: ${props => props.theme.colors.danger};
      }
  `}
`;

const ErrorMessage = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.danger};
  padding: 6px 16px 0;
`;

const Input = ({className, ...props}) => {
  return (
    <InputContainer className={className} {...props} >
      <StyledInput {...props}/>
      {props.error &&
        <ErrorMessage>{props.error}</ErrorMessage>
      }
    </InputContainer>
  );
};

export default Input;
