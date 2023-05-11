import React from 'react'
import styled from 'styled-components';
import { deleteButtonProps } from '../../../types/content';

const DeleteButton = ({deleteHandler}:deleteButtonProps) => {
  return (
    <Delete onClick={deleteHandler}>취소</Delete>
  )
}

export default DeleteButton;

const Delete = styled.button`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  margin: 0 16px 16px 16px;
  border: 3px solid black;
  border-radius: 4px;
  background-color: #eeeeee;
`;