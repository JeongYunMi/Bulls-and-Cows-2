import React from 'react'
import { StartButtonWrapper } from './StartButton.style';
import Start from '../../assets/svg/Start';

const StartButton = () => {
  return (
      <StartButtonWrapper href='/game' onClick={()=>{}}>
        <Start />
      </StartButtonWrapper>
  )
}

export default StartButton;