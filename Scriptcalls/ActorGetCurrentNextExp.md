# Get Current/Next Exp from Actor

```js
var actorId = 1;
var actor = $gameActors.actor(actorId); 
var level = actor.level;

var currentExp = actor.currentExp() - actor.expForLevel(level);
var nextExp = actor.expForLevel(level + 1) - actor.expForLevel(level);

console.log(currentExp + " / " + nextExp);
```
