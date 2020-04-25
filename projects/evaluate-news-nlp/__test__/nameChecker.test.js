import { checkForName } from '../src/client/js/nameChecker'

test('Validate input to be proper sentece format', () => {
    expect(checkForName('John is a very good football player!')).toBe(true);
  });

  test('Validate input to be proper sentece format', () => {
    expect(checkForName('')).toBe(false);
  });

  test('Validate input to be proper sentece format', () => {
    expect(checkForName('1234567890')).toBe(false);
  });