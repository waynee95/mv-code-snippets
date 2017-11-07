# Save To Last Loaded Slot

This snippet adds DataManager.saveToLastLoadedSlot().
You can call that function in an event to save the game to the
last loaded slot.

```js
(function() {
  DataManager._lastLoadedSlotID = 1;
  DataManager.loadGameWithoutRescue = function(savefileId) {
    var globalInfo = this.loadGlobalInfo();
    if (this.isThisGameFile(savefileId)) {
      var json = StorageManager.load(savefileId);
      this.createGameObjects();
      this.extractSaveContents(JsonEx.parse(json));
      this._lastAccessedId = savefileId;
      this._lastLoadedSlotID = savefileId;
      return true;
    } else {
      return false;
    }
  };

  DataManager.saveToLastLoadedSlot = function() {
    var slotID = this._lastLoadedSlotID;
    $gameSystem.onBeforeSave();
    if (DataManager.saveGame(slotID)) {
      StorageManager.cleanBackup(slotID);
    }
  };
})();
```
