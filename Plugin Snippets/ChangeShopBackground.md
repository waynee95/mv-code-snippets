# Change Shop Background

Specify a default background. You can change it in-game via the Plugin Command 'ChangeShopBg name'.

```js
(function () {

    var defaultBackground = 'background'; // ENTER DEFAULT BG HERE
    var background = null; 

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args)
        if (command.toLowerCase() === 'changeshopbg') {
            background = args[0];
        }
    };

    Scene_Shop.prototype.createBackground = function () {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.bitmap = ImageManager.loadPicture(background != null ? background : defaultBackground);
        background = null;
        this.addChild(this._backgroundSprite);
    };

})();
```
