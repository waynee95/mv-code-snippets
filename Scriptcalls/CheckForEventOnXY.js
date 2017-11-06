/**
 * This snippet allows you to check if the player collides with a
 * certain event. These events will have a <checkForMe> notetag.
 */

(function() {
  var _GamePlayer_moveStraight = Game_Player.prototype.moveStraight;
  Game_Player.prototype.moveStraight = function(d) {
    _GamePlayer_moveStraight.call(this, d);

    //Get coordiantes for direction
    var x = $gameMap.roundXWithDirection(this.x, d);
    var y = $gameMap.roundYWithDirection(this.y, d);

    var event = $gameMap.eventsXy(x, y)[0];

    //Notetag to check for
    var noteTagRegEx = /<checkForMe>/i;

    //Check if event is not undefined and then check for notetag
    if (event && event.event().note.match(noteTagRegEx)) {
      console.log("Collided with event: " + event.eventId());
    }
  };
})();
