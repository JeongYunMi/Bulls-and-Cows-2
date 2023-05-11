import React from 'react'
import { SelectedNumberProps } from '../../../types/content';
import SelectedNumberList from './SelectedNumberList';
import DeleteButton from './DeleteButton';
import Box from '../../Box';
import SendButton from './SendButton';

const SelectedNumberWrap = ({selectedNumber, deleteHandler, sendButtonHandler}: SelectedNumberProps) => {
  const handleDelete = deleteHandler || (() => {});
  const HandlersendButton = sendButtonHandler || (() => {});

  return (
    <Box justifyContent='flex-start'alignItems='flex-start' height='128px'>
      <SelectedNumberList selectedNumber={selectedNumber}/>
      <Box direction='column' alignItems='center' justifyContent='center'>
        <DeleteButton deleteHandler={handleDelete}/>
        <SendButton sendHandler={HandlersendButton}/>
      </Box>
    </Box>
  )
}

export default SelectedNumberWrap;
