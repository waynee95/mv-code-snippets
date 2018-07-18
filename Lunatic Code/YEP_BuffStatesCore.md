# This is a collection of Lunatic Codes for YEP BuffStatesCore

> Make a state increase/decrease stats by hard values

```
<Custom Apply Effect>
// Debuff -10 atk
user.addParam(2, -10);
</Custom Apply Effect>

<Custom Remove Effect>
// Add the lost atk back
user.addParam(2, 10);
</Custom Remove Effect>
```
