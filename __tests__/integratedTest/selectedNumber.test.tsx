import { render, cleanup, screen, fireEvent, getByRole } from "@testing-library/react";
import '@testing-library/jest-dom';
import Game from "../../pages/game";
import { toast } from 'react-toastify';

afterEach(() => {
  cleanup(); 		  
});	

// jest.mock('../../pages/game/Game', () => ({
//   toast: {
//     error: jest.fn(),
//   },
// }));

describe('Game Page', () => {

  it('When the player clicks on the number card, the selected number is displayed ', () => {
    render(<Game />)

    const NumberButton = screen.getAllByTitle('numberCard');

    fireEvent.click(NumberButton[0]);
    fireEvent.click(NumberButton[3]);
    fireEvent.click(NumberButton[4]);

    const selectedNumber1 = screen.getAllByTitle('selectedNumber')[0];
    const selectedNumber2 = screen.getAllByTitle('selectedNumber')[1];
    const selectedNumber3 = screen.getAllByTitle('selectedNumber')[2];

    expect(selectedNumber1).toHaveTextContent('0');
    expect(selectedNumber2).toHaveTextContent('3');
    expect(selectedNumber3).toHaveTextContent('4');
  });

  // it('When the player clicks on the delete button, the number is deleted ', () => {
  //   const sampleData = "123"

  //   render(<SelectedNumberWrap selectedNumber={sampleData} />)

  //   const deleteButton = screen.getByText('취소');
  //   const selectedNumber1 = screen.getAllByTitle('selectedNumber')[0];
  //   const selectedNumber2 = screen.getAllByTitle('selectedNumber')[1];
  //   const selectedNumber3 = screen.getAllByTitle('selectedNumber')[2];
    

  //   fireEvent.click(deleteButton);
  //   fireEvent.click(deleteButton);
  //   fireEvent.click(deleteButton);
    
    
  //   expect(selectedNumber3).toHaveTextContent('X');
  //   expect(selectedNumber2).toHaveTextContent('X');
  //   expect(selectedNumber1).toHaveTextContent('X');
  // });


  it('The number of attempts increases when the player clicks the send button', () => {
    render(<Game />)

    const sendButton = screen.getByText('확인');
    const attemptsNumber = screen.getByTitle('attemptsNumber');

    const NumberButton = screen.getAllByTitle('numberCard');

    fireEvent.click(NumberButton[0]);
    fireEvent.click(NumberButton[3]);
    fireEvent.click(NumberButton[4]);

    fireEvent.click(sendButton);

    expect(attemptsNumber).toHaveTextContent('현재 시도 횟수: 1');
  });


  // it('3개의 숫자를 클릭하지 않고 확인 버튼을 눌렀을 시의 처리', () => {
  //   render(<Game />)

  //   const sendButton = screen.getByText('확인');
  //   fireEvent.click(sendButton);

  //   expect(toast.error).toHaveBeenCalledWith('숫자를 다 채우고 시도해주세요.');
  // });

});