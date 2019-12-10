import promiseAllProps from './promiseAllProps';

test('wait for fulfilled object properties ', () => {
  promiseAllProps({
    foo: Promise.resolve('foo'),
    bar: Promise.resolve('bar'),
  }).then((result) => {
    expect(result).toEqual({ foo: 'foo', bar: 'bar' });
  });
});

test('reject when one object promise is rejected', () => {
  promiseAllProps({
    foo: Promise.resolve('foo'),
    bar: Promise.reject(new Error()),
  }).catch((result) => {
    expect(result instanceof Error).toBe(true);
  });
});
