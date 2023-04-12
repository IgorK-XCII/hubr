import { mergeQueryParams } from './mergeQueryParams';

describe('mergeQueryParams', () => {
  test('test with one param', () => {
    const params = mergeQueryParams({
      value: 'test',
    });

    expect(params).toBe('?value=test');
  });
  test('test with multi params', () => {
    const params = mergeQueryParams({
      value: 'test',
      data: 'test',
    });

    expect(params).toBe('?value=test&data=test');
  });
  test('test with undefined param', () => {
    const params = mergeQueryParams({
      value: 'test',
      data: undefined,
    });

    expect(params).toBe('?value=test');
  });
  test('test with empty params', () => {
    const params = mergeQueryParams({
    });

    expect(params).toBe('');
  });
});
