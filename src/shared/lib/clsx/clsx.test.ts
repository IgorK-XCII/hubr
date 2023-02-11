import { clsx } from './clsx';

describe('classNames', () => {
  test('with first param', () => {
    expect(clsx(['someClass'])).toBe('someClass');
  });
  test('with empty first param', () => {
    expect(clsx([])).toBe('');
  });
  test('with mod true', () => {
    expect(clsx(['someClass'], { hovered: true })).toBe('someClass hovered');
  });
  test('with mod false', () => {
    expect(clsx(['someClass'], { hovered: false })).toBe('someClass');
  });
  test('with mod undefined', () => {
    expect(clsx(['someClass'], { hovered: undefined })).toBe('someClass');
  });
});
