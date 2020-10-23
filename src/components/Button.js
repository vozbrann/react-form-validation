import styled from 'styled-components';

const Button = styled.button`
display: inline-block;
  background: ${props => {
    if (props.variant === "light") return "#fff";
    return "#4BCFA0";
  }};
  color: ${props => {
    if (props.variant === "light") return "#4BCFA0";
    return "#fff";
  }};
  outline: none;
  transition: 0.2s;
  padding: ${props => {
    if (props.size === "sm") return "16px 16px 14px";
    return "16px 48px 14px";
  }};
  border: ${props => {
    if (props.variant === "light") return "2px solid rgba(0,0,0,0.1)";
    return "2px solid transparent";
  }};
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: ${props => {
      if (props.variant === "light") return "#4BCFA0";
      return "#50DAA8";
    }};
    color: #fff;
    border: 2px solid transparent;
  }
`;

export default Button;
