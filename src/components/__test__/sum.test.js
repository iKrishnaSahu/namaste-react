import { sum } from "../sum";

test('Sum func should return sum of two numbers', () => {
    const sumResult = sum(1, 2);
    expect(sumResult).toBe(3)
});