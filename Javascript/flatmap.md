# Flatmap

## Variant 1

Using the reduce and concat

```js
[1, 2, 3].reduce((arr, e) => arr.concat([e, e + 1]), []); // [ 1, 2, 2, 3, 3, 4 ]
```

## Variant 1

Using concat and spread operator

```js
const flatmap = (arr, func) => [].concat(...arr.map(func));

flatmap([1, 2, 3], e => [e, e + 1]); // [ 1, 2, 2, 3, 3, 4 ]
```
