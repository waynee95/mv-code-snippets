# Get Passive States

This snippet lists all non hidden passive states from a battler.
You can add a <hiddenpassive> notetag to a state to hide it.
It will show them in a message box.

```js
var battler = $gameActors.actor(1);

var passives = battler.passiveStates().filter(function(state) {
  return !state.meta.hiddenpassive;
});

var text = "Passives: \n";

if (passives.length > 0) {
  passives.forEach(function(state) {
    text += "\t\t" + state.description + "\n";
  });
} else {
  text += "none!";
}

$gameMessage.add(text);
```
