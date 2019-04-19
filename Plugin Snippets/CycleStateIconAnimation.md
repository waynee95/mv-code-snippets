## Cycle State Icon Animation

Small example on how to make the state icons cycle in the menu instead
of displaying them all at once.

```js
(function() {
  var _Window_MenuStatus_initialize = Window_MenuStatus.prototype.initialize;
  Window_MenuStatus.prototype.initialize = function() {
    this._actorStateIndex = {};
    $gameParty.members().forEach(function(actor) {
      var actorId = actor.actorId();
      this._actorStateIndex[actorId] = 0;
    }, this);
    this._frameCounter = 0;

    _Window_MenuStatus_initialize.apply(this, arguments);
  };

  Window_MenuStatus.prototype.drawActorIcons = function(actor, x, y, width) {
    if (actor.states().length > 0) {
      var stateIndex = this._actorStateIndex[actor.actorId()];
      var state = actor.states()[stateIndex];
      var stateIcon = state.iconIndex;
      if (stateIcon > 0) {
        this.drawIcon(stateIcon, x, y + 2);
      }
    }
  };

  var _Window_MenuStatus_update = Window_MenuStatus.prototype.update;
  Window_MenuStatus.prototype.update = function() {
    _Window_MenuStatus_update.call(this);
    if (this._frameCounter >= 30) {
      $gameParty.members().forEach(function(actor) {
        var actorId = actor.actorId();
        var statesCount = actor.states().length;
        this._actorStateIndex[actorId] =
          (this._actorStateIndex[actorId] + 1) % statesCount;
      }, this);
      this.refresh();
      this._frameCounter = 0;
    }
    this._frameCounter++;
  };
})();
```
