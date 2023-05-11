/**
 * 랜덤 3자리 숫자 생성 함수
 * @returns "NNN" (N=Number)
 */
const randomNumber = () => {
  return String(Math.floor(Math.random() * 10));
};

const createNumber = () => {
  let result = "";
  for (let i = 0; i < 3; i++) {
    let inputData = randomNumber();

    if (result.includes(inputData)) {
      i--;
      continue;
    }
    result += inputData;
  }
  return result;
};

export default createNumber;