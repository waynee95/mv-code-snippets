# Get Resist States

This snippet lists all resist states from a battler.
It will show them in a message box.

```js
var battler = $gameActors.actor(1);

var stateResist = battler.stateResistSet().map(function(stateId) {
  return $dataStates[stateId];
});

var text = "stateResist: \n";

stateResist.forEach(function(state, index) {
  text += state.description;
  if (index < stateResist.length - 1) text += ", ";
});

$gameMessage.add(text);
```
