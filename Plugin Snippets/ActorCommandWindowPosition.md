# ActorCommandWindow Position

This shows an example on how to make the actor command window change position
according to the current selecting actor.

```js
var _Scene_Battle_startActorCommandSelection =
  Scene_Battle.prototype.startActorCommandSelection;
Scene_Battle.prototype.startActorCommandSelection = function() {
  _Scene_Battle_startActorCommandSelection.call(this);
  var currentActor = BattleManager.actor();
  var index = $gameParty.battleMembers().indexOf(currentActor);
  var positions = [
    [
      0,
      Graphics.boxHeight -
        this._statusWindow.height -
        this._actorCommandWindow.height
    ],
    [
      this._actorCommandWindow.width,
      Graphics.boxHeight -
        this._statusWindow.height -
        this._actorCommandWindow.height
    ],
    [0, Graphics.boxHeight - this._actorCommandWindow.height],
    [
      this._actorCommandWindow.width,
      Graphics.boxHeight - this._actorCommandWindow.height
    ]
  ];
  if (index >= 0) {
    var position = positions[index];
    this._actorCommandWindow.x = position[0];
    this._actorCommandWindow.y = position[1];
  }
};
```
