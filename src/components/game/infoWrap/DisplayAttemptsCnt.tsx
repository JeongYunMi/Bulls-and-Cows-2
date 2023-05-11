import React from 'react'
import styled from 'styled-components';
import { attemptsNumberProps } from '../../../types/content';

const DisplayAttemptsCnt = ({attemptsNumber}:attemptsNumberProps) => {
  return (
    <TextWrap title='attemptsNumber'>현재 시도 횟수: {String(attemptsNumber)}</TextWrap>
  )
}

export default DisplayAttemptsCnt;

const TextWrap = styled.div`
  font-size: 24px;
  margin: 24px 0 0 32px;
`;