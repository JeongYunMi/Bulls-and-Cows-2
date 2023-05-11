import React from 'react'
import styled from 'styled-components';
import { numberCardProps } from '../../../types/content';

const NumberButton = ({numberCardHandler}: numberCardProps) => {
  const firstLine = () => {
    const fl = [];
    for(let i = 0; i < 5; ++i){
      fl.push(<Card title='numberCard' key={i} onClick={()=>numberCardHandler(i)}>{i}</Card>)
    }
    return fl;
  }

  const secLine = () => {
    const sl = [];
    for(let i = 5; i < 10; ++i){
      sl.push(<Card title='numberCard' key={i} onClick={()=>numberCardHandler(i)}>{i}</Card>)
    }
    return sl;
  }

  return (
    <NumberBtnWrap>
      <NumberBtnLine>
        {firstLine()}
      </NumberBtnLine>
      <NumberBtnLine>
        {secLine()}
      </NumberBtnLine>
    </NumberBtnWrap>
  )
}

export default NumberButton;

const NumberBtnWrap = styled.div`
  width: 392px;
  margin: 0 32px;
  display: flex;
  flex-direction: column;

`;

const NumberBtnLine = styled.div`
  margin: 24px 0 0 0;
  display: flex;
  justify-content: space-between;
`;

const Card = styled.button`
  width: 60px;
  height: 60px;
  font-size: 24px;
`;