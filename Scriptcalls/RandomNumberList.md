# Random Number List

This snippet lets you generate a certain number of random numbers, from a pre-defined list.

```js
var numbers = [1, 2, 3, 4, 5];


var shuffled = numbers.sort(function () {
		return 0.5 - Math.random();
	});

var result = shuffled.slice(0, 3);

console.log(result);

$gameVariables.setValue(1, result);
```
