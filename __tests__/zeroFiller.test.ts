import { zeroFiller } from '../src/index';

test('return length most be greater or equal that given length', () => {
  const lengths = [1, 2, 5, 6];
  lengths.forEach(len => {
    expect(zeroFiller(100, len).length).toBeGreaterThanOrEqual(len)
  });
});

test('test powers of 10 ', () => {
  expect(zeroFiller(1,5)).toBe('00001');
  expect(zeroFiller(10,5)).toBe('00010');
  expect(zeroFiller(100,5)).toBe('00100');
  expect(zeroFiller(1000,5)).toBe('01000');
  expect(zeroFiller(10000,5)).toBe('10000');
  expect(zeroFiller(100000,5)).toBe('100000');
});