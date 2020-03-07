# Flip battle sprites

This snippet allows you to flip the battle sprites horizontally. This is
necessary if you want to have the actors on the left side of the screen and
the enemies on the right side.

```js
var _Sprite_Actor_updateMain = Sprite_Actor.prototype.updateMain;
Sprite_Actor.prototype.updateMain = function() {
  _Sprite_Actor_updateMain.call(this);
  if (this.scale.x > 0) {
    this.scale.x *= -1;
  }
};

// Compatibility with YEP_X_AnimatedSVEnemies
if (Imported.YEP_X_AnimatedSVEnemies) {
  var _Sprite_Enemy = Sprite_Enemy.prototype.updateMain;
  Sprite_Enemy.prototype.updateMain = function() {
    _Sprite_Enemy.call(this);
    if (this.scale.x < 0) {
      this.scale.x *= -1;
    }
  };
}
```
