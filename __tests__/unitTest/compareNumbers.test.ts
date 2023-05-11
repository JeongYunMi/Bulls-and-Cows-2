import compareNumbers from "../../src/utils/compareNumbers";


describe('utils = compareNumbers(동작체크)', () => {
  it('3 out test', () => {
    expect(compareNumbers("123", "567")).toEqual( {strike:0, ball:0, out:3 })
  });

  it('3 strike', () => {
    expect(compareNumbers("123", "123")).toEqual( {strike:3, ball:0, out:0 })
  });

  it('3 ball', () => {
    expect(compareNumbers("123", "312")).toEqual( {strike:0, ball:3, out:0 })
  });

  it('1 strike / 1 ball / 1 out', () => {
    expect(compareNumbers("123", "139")).toEqual( {strike:1, ball:1, out:1 })
  });
});

describe('utils = compareNumbers(오류체크)', () => {

  it('넘치는 숫자', () => {
    expect(() => {compareNumbers("12346", "567")}).toThrow(new Error("숫자 값이 잘못되었습니다."))
  });

  it('적은 숫자', () => {
    expect(() => {compareNumbers("12", "123")}).toThrow(new Error("숫자 값이 잘못되었습니다."))
  });
});