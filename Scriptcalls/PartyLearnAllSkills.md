# Party Learn All Skills

You can run this snippet in an autorun event at the game start, 
to give each actor in the all skills. For debuggin purposes.

```js
$gameParty.members().forEach(function(member) {
  $dataSkills.forEach(function(skill) {
    if (skill && skill.name != "") {
      member.learnSkill(skill.id);
    }
  });
});
```
