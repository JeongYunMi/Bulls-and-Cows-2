
/**
 * @param input : 사용자가 입력한 숫자 문자열
 * @param answer : 정답 문자열
 * @returns strike, ball, out 각각의 수가 숫자 값으로 return
 */
function compareNumbers(input:string, answer:string) {
  let strike = 0;
  let ball = 0;
  let out = 3;

  if(!(input.length === 3 && answer.length ===3)){
    throw new Error('숫자 값이 잘못되었습니다.');
  }

  for (let i = 0; i < answer.length; i++) {
    if (input[i] === answer[i]) {
      strike++;
      out--;
    } else if (answer.includes(input[i])) {
      ball++;
      out--;
    }
  }

  return { strike, ball, out };
}

export default compareNumbers;