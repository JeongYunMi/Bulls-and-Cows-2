import React from 'react'
import styled from 'styled-components';
import { sendButtonProps } from '../../../types/content';

const SendButton = ({sendHandler}:sendButtonProps) => {
  return (
    <Send onClick={sendHandler}>확인</Send>
  )
}

export default SendButton;

const Send = styled.button`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  border: 3px solid black;
  border-radius: 4px;
  background-color: #eeeeee;
`;