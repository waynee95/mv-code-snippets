# Is Player in Radius

This snippet shows, how to check if the player is in a certain radius of an event.

```js
function isPlayerInRadius(event, rad) {
    if (!event) return false;
    
    var eventX = event.x;
    var eventY = event.y;

    for (var j = eventY - rad; j < eventY + rad + 1; j++) {
        for (var i = eventX - rad; i < eventX + rad +  1; i++) {
            if ($gamePlayer.pos(i, j)) return true;
        }
    }
    return false;
}
// Is the player in radius 2 around event with id 2
console.log(isPlayerInRadius($gameMap.event(2), 2));
```
