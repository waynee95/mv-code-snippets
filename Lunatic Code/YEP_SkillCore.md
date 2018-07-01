# This is a collection of Lunatic Codes for YEP Skill Core

## Custom Show Eval

Show Skill only when the user has a certain weapon equipped.

```
<Custom Show Eval>
visible = user.weapons().contains($dataWeapons[ID]);
</Custom Show Eval>
```

## Custom MP Cost

MP Cost of the skill is dependant on the user's class.

```
<Custom MP Cost>
if (user.currentClass().name === "Mage") {
  cost = 16;
} else if (user.currentClass().name === "Sage") {
  cost = 42;
} else if (user.currentClass().name === "Whatever") {
  cost = 1337;
} else {
  cost = 0;
}
</Custom MP Cost>
```

## Boost Damage 

Add extra damage with a chance after a skill was executed.

```
<Post-Damage Eval>
user._lastDamageDealt = value;
</Post-Damage Eval>

<After Eval>
if (user.isStateAffected(11)) {
    var successRate = 0.2;
    if (Math.random() < successRate) {
        user.startAnimation(1, false);
        var dmg = user._lastDamageDealt * 1.5;
        target.gainHp(-dmg);
        target.startDamagePopup();
    }
    user._lastDamageDealt = undefined;
}
</After Eval>
```
