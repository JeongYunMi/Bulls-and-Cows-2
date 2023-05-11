import React from 'react'
import styled from 'styled-components';
import type { SelectedNumberProps } from '../../../types/content';



const SelectedNumberList = ({ selectedNumber }: SelectedNumberProps) => {
  const showNumber = (numberString: string) => {
    const res = [];
    for(let i = 0; i < 3 ; ++i){
      if(i < numberString.length){
        res.push(<SelectedNumberCard title='selectedNumber' key={numberString[i]}>{numberString[i]}</SelectedNumberCard>)
      }else{
        res.push(<SelectedNumberCard title='selectedNumber' key={i+10}>X</SelectedNumberCard>)
      }
    }
    return res;
  };

  return (
    <Wrap>
    {
      showNumber(selectedNumber)
    }
    </Wrap>
  )
}

export default SelectedNumberList;

const Wrap = styled.div`
  margin: 16px 0 16px 16px;
  display: flex;
`;

const SelectedNumberCard = styled.div`
  width: 80px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 56px;
  margin: 0px 0 16px 16px ;
  border: 3px solid black;
  border-radius: 4px;
  background-color: #eeeeee;
`;