# Parse Plugin Parameters

This snippet shows how to parse Plugin Parameters. Due to how Plugin Parameters are handled, we need to call
JSON.parse recursively. The parse function below will set every parameter that is an empty String to null. 

```js
var JSONSuperParse = function (string) {
    var temp;
    try {
        temp = obj = JsonEx.parse(typeof string === 'object' ? JsonEx.stringify(string) : string);
    } catch (e) {
        return string;
    }
    if (typeof temp === 'object') {
        Object.keys(temp).forEach(function (key) {
            temp[key] = JSONSuperParse(temp[key]);
            if (temp[key] === '') {
                temp[key] = null;
            }
        });
    }
    return temp;
};

var parameters = JSONSuperParse(PluginManager.parameters('test'));

console.log(parameters);
```