# Skip the Title Scene If No Savefile Exists

```js
var _Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function () {
    if (DataManager.isAnySavefileExists()) {
        _Scene_Boot_start.call(this);
    } else {
        Scene_Base.prototype.start.call(this);
        SoundManager.preloadImportantSounds();
        this.checkPlayerLocation();
        DataManager.setupNewGame();
        SceneManager.goto(Scene_Map);
        this.updateDocumentTitle();
    }
};
```
