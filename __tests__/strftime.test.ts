import { strftime } from '../src/index';

test('test all directives implemented with es-MX locate identifier', () => {
  process.env.TZ = 'America/Mexico_City';
  const date = new Date('2022-03-11 02:02:02.02 GMT-0600');
  expect(strftime(date, '%%', 'es-MX')).toBe('%');
  expect(strftime(date, '%a', 'es-MX')).toBe('vie');
  expect(strftime(date, '%A', 'es-MX')).toBe('viernes');
  expect(strftime(date, '%w', 'es-MX')).toBe('5');
  expect(strftime(date, '%d', 'es-MX')).toBe('11');
  expect(strftime(date, '%b', 'es-MX')).toBe('mar');
  expect(strftime(date, '%B', 'es-MX')).toBe('marzo');
  expect(strftime(date, '%m', 'es-MX')).toBe('03');
  expect(strftime(date, '%y', 'es-MX')).toBe('22');
  expect(strftime(date, '%Y', 'es-MX')).toBe('2022');
  expect(strftime(date, '%H', 'es-MX')).toBe('02');
  expect(strftime(date, '%I', 'es-MX')).toBe('02');
  expect(strftime(date, '%p', 'es-MX')).toBe('a. m.');
  expect(strftime(date, '%M', 'es-MX')).toBe('02');
  expect(strftime(date, '%S', 'es-MX')).toBe('02');
  expect(strftime(date, '%f', 'es-MX')).toBe('020000');
  expect(strftime(date, '%z', 'es-MX')).toBe('-0600');
  expect(strftime(date, '%Z', 'es-MX')).toBe('CST');
  expect(strftime(date, '%c', 'es-MX')).toBe('vie, 11 de mar de 2022 02:02:02');
  expect(strftime(date, '%x', 'es-MX')).toBe('11/3/2022');
  expect(strftime(date, '%X', 'es-MX')).toBe('02:02:02');
});