// Ref: https://blog.theashishmaurya.me/creating-a-react-modal-with-react-custom-hooks-and-typescript

import React from "react";
import styled from "styled-components";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const ModalOverlay = styled.div`
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBox = styled.div`
  display: block;
  background: white;
  width: 70%;
  height: 70%;
  padding: 1rem;
  border-radius: 1rem;
`;

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const { children, isOpen, toggle } = props;
  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={toggle}>
          <ModalBox onClick={(e) => e.stopPropagation()}>{children}</ModalBox>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
