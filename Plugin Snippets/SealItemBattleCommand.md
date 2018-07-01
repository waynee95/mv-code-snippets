# Seal Item Battle Command

## Using a switch
```js
(function () {

    // When the switch is off, then the item command will be sealed
    // for the whole party
    Window_ActorCommand.prototype.isItemsEnabled = function () {
        return $gameSwitches.value(1); // SWITCH ID 
    };

    Window_ActorCommand.prototype.addItemCommand = function () {
        this.addCommand(TextManager.item, 'item', this.isItemsEnabled());
    };

})();
```

## Using a state
```js
(function () {

    // When that state is applied to an actor, the item command will be sealed 
    // for that specific actor
    Window_ActorCommand.prototype.isItemsEnabled = function () {
        return !this._actor.isStateAffected(11); // STATE ID
    };

    Window_ActorCommand.prototype.addItemCommand = function () {
        this.addCommand(TextManager.item, 'item', this.isItemsEnabled());
    };

})();
```
