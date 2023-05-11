import type { NextPage } from 'next'
import React, { useEffect, useState } from "react";
import type { numberValue, recordValue } from '../src/types/GameState'
import MenuBar from '../src/components/MenuBar'
import Box from '../src/components/Box'
import SelectedNumberWrap from '../src/components/game/SelectedNumberWrap/selectedNumberWrap'
import DisplayAttemptsCnt from '../src/components/game/infoWrap/DisplayAttemptsCnt'
import NumberButton from '../src/components/game/numberButtonWrap/NumberButton';
import compareNumbers from '../src/utils/compareNumbers';
import createNumber from '../src/utils/randomNumbers';
import RecordTable from '../src/components/game/recordTableWrap/RecordTable';

const Game: NextPage = () => {
  const [numberState, setNumberState] = useState<numberValue>({
    answerNumber: "",
    selectedNumber: "",
    attemptsNumber: 0
  });
  const [recordState, setRecordState] = useState<recordValue[]>([]);
  const [nextCnt, setNextCnt] = useState<number>(1);

  useEffect(()=>{
    const answer = createNumber();
    console.log(answer)
    setNumberState((prev)=> ({
      ...prev,
      answerNumber: answer
    })) 
  },[])

  const onClickNumberCardHandler = (n: Number) => {
    if (numberState.selectedNumber.length < 3) {
      setNumberState(prev => ({
        ...prev,
        selectedNumber: prev.selectedNumber + String(n)
      }));
    }else{
      alert('기존 숫자를 지우고 숫자 카드를 클릭하세요')
    }
  };

  const onClickDeleteHandler = () => {
    const idx = numberState.selectedNumber.length;
    if (idx > 0) {
      const updateString = numberState.selectedNumber.slice(0, idx-1)
      console.log("idx: ", idx, updateString)

      setNumberState(prev => ({
        ...prev,
        selectedNumber: updateString
      }));
    }else{
      alert('삭제할 숫자가 없습니다.')
    }
  };

  const onClickSendButtonHandler = () => {
    const idx = numberState.selectedNumber.length;
    if(idx < 3){
      alert('숫자를 다 채우고 시도해주세요.')
    }else{
      if(numberState.answerNumber === numberState.selectedNumber){
        // 정답!
        confirm('정답입니다!');
        window.location.href = '/';
      }else{
        const compare = compareNumbers(numberState.selectedNumber, numberState.answerNumber)
        const idx = nextCnt;
        setRecordState((prev)=>(
            prev.concat([{
              cnt: idx,
              selectedNumber: numberState.selectedNumber,
              compareNumber: `${compare.strike}S  ${compare.ball}b  ${compare.out}O`
          }])
        ))

        setNextCnt(nextCnt+1);

        setNumberState((prev)=>({
          ...prev,
          attemptsNumber: prev.attemptsNumber + 1,
          selectedNumber: ""
        }))
      }
      
    }
  }

  return (
    <>
      <MenuBar />
      <Box direction='column' justifyContent='flex-start' >
        <DisplayAttemptsCnt attemptsNumber={numberState.attemptsNumber}/>
        <SelectedNumberWrap sendButtonHandler={onClickSendButtonHandler} deleteHandler={onClickDeleteHandler} selectedNumber={numberState.selectedNumber}/>
        <NumberButton numberCardHandler={onClickNumberCardHandler}/>
        <RecordTable recordProps={recordState}/>
      </Box>
    </>
  )
}

export default Game
