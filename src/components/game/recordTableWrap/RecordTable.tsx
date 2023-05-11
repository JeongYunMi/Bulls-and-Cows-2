import React from 'react'
import styled from 'styled-components';
import { recordTableProps } from '../../../types/content';

const RecordTable = ({recordProps}:recordTableProps) => {
  return (
    <RecordWrap>
      {
        recordProps.map((el, idx)=>(
          <RecordText key={idx}>{String(el.cnt)}. {el.selectedNumber} {el.compareNumber}  </RecordText>
        ))
      }
    </RecordWrap>
  )
}

export default RecordTable;

const RecordWrap = styled.div`
  width: 392px;
  height: 184px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 32px;
  border: 3px solid black;
  border-radius: 2px;
  background-color: #eeeeee;
  overflow: auto;
`;
const RecordText = styled.div`
  font-size: 24px;
  margin: 8px;
  font-weight: bold;
`;