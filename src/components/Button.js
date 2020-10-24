import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  width: ${props => props.block ? "100%" : "auto"};
  background: ${props => {
    if (props.variant === "light") return "#fff";
    return props.theme.colors.primary;
  }};
  color: ${props => {
    if (props.variant === "light") return props.theme.colors.primary;
    return "#fff";
  }};
  outline: none;
  transition: 0.2s;
  padding: ${props => {
    if (props.size === "sm") return "16px 16px 14px";
    return "16px 48px 14px";
  }};
  border: ${props => {
    if (props.variant === "light") return "1px solid rgba(0,0,0,0.1)";
    return "1px solid transparent";
  }};
  border-radius: ${props => props.theme.borderRadius.medium};
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: ${props => {
      if (props.variant === "light") return props.theme.colors.primary;
      return props.theme.colors.primaryLight;
    }};
    color: #fff;
    border: 1px solid transparent;
  }
`;

export default Button;
