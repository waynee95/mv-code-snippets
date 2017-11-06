/**
 * This snippets adds an exit command to the title scene to close the game.
 */

(function() {
  var _Window_TitleCommand_makeCommandList =
    Window_TitleCommand.prototype.makeCommandList;
  Window_TitleCommand.prototype.makeCommandList = function() {
    _Window_TitleCommand_makeCommandList.call(this);
    this.addCommand("Exit", "exitGame");
  };

  Scene_Title.prototype.commandExitGame = function() {
    this.fadeOutAll();
    SceneManager.exit();
  };

  var _Scene_Title_createCommandWindow =
    Scene_Title.prototype.createCommandWindow;
  Scene_Title.prototype.createCommandWindow = function() {
    _Scene_Title_createCommandWindow.call(this);
    this._commandWindow.setHandler("exitGame", this.commandExitGame.bind(this));
  };
})();
