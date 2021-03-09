import { sum } from './math';

// sum(10, 20);

describe('sum 함수 테스트 코드', () => {
  //설명글
  test('10 + 20 = 30', () => {
    const result = sum(10, 20);
    //예상한다는 코드
    expect(result).toBe(30);
    //예외코드
    // expect(result).not.toBe(50);
  });
});
