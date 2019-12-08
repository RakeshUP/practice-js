# Create a function that caches another function

Example:

```js
function expensiveOperation() {
  console.log('expensiveOperation function is called!');
  return 22;
}

const memoized = memoize(expensiveOperation); // <- memoize function
console.log(memoized());
console.log(memoized());

```

the console should show:

```js
expensiveOperation function is called!
22
22
```
