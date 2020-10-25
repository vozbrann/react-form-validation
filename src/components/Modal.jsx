import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => props.show ? "flex" : "none"};
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const ModalBody = styled.div`
  position: absolute;
  background: white;
  width: 384px;
  height: auto;
  padding: 48px;
  border-radius: ${props => props.theme.borderRadius.large};
`;

const CloseButton = styled(Button)`
  padding: 10px;
  border-radius: 50%;
  display: flex;

  position: absolute;
  right: -20px;
  top: -20px;
  
  color: #000;
  background-color: ${props => props.theme.colors.gray};
  
  &:hover:not([disabled]) {
    color: #000;
    background-color: #d7d7d7;
  }
`;

const Modal = ({handleClose, show, children}) => {
  return (
    <StyledModal show={show} onClick={handleClose}>
      <ModalBody onClick={(e)=> e.stopPropagation()}>
        {children}
        <CloseButton size="sm" onClick={handleClose}>
          <span className="material-icons">close</span>
        </CloseButton>
      </ModalBody>
    </StyledModal>
  );
};

export default Modal;
