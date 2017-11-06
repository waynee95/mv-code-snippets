/**
 * You can run this snippet in an autorun event at the game start, 
 * to give the party all items. For debuggin purposes.
 */

$dataItems.forEach(function(item) {
  if (item) $gameParty.gainItem(item, 99);
});
$dataWeapons.forEach(function(item) {
  if (item) $gameParty.gainItem(item, 99);
});
$dataArmors.forEach(function(item) {
  if (item) $gameParty.gainItem(item, 99);
});
