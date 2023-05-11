import createNumber from "../../src/utils/randomNumbers";


describe('utils = createNumber', () => {
  it('Random 3-digit numeric generation', () => {
    expect(createNumber().length).toBe(3)
  });

  it('Check for overlapping numbers', ()=> {
    const res = new Set(createNumber());
    expect(res.size === 3).toBeTruthy()
    //.toMatch(/^[1-9]{3}$/); 요런식으로 3자리 숫자인지는 판별 가능
  });
});