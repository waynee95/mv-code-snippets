# DeadOrAlive Item

## Prerequisite 

This is a tutorial on how to create an item that can target 1 alive or dead ally. Normally this is not possible, so we will need the following plugins:
- YEP_X_SelectionCore and its dependencies
- HIME_FormulaEffects
- DeadOrAlive (can be found in the NewData Folder of newer MV Verions)

Make sure to place SelectionCore above FormulaEffects above DeadOrAlive.

## Create the Item

- Create an item with scope set to 1 Ally
- Set the damage type to HP Recover and give it a value of 0
- Add the following notetags:
```
<scope:oneDeadOrAlive>

<Custom Select Condition>
condition = target.isActor();
</Custom Select Condition>

<formula effect>
if (b.isDead()) {
    b.removeState(b.deathStateId());
}
var rate = 0.3;
b.gainHp(Math.round(b.mhp * rate));
b.gainMp(Math.round(b.mmp * rate));
</formula effect>
```
