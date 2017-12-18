# Window_Textbox with Word Wrap

This shows an example window that displays a text. The text will wrap around if it larger then the window width.

```js
function Window_Textbox() {
	this.initialize.apply(this, arguments);
}

Window_Textbox.prototype = Object.create(Window_Base.prototype);
Window_Textbox.prototype.constructor = Window_Textbox;

Window_Textbox.prototype.initialize = function () {
	var width = 250;
	var height = 140;
	var x = Graphics.boxWidth / 2 - width / 2;
	var y = Graphics.boxHeight / 2 - height / 2;
	Window_Base.prototype.initialize.call(this, x, y, width, height);
	this._text = null;
	this.setText("This is a test! I am a really long text.");
};

Window_Textbox.prototype.setText = function (text) {
	if (this._text !== text) {
		this._text = text;
		this.refresh();
	}
};

Window_Textbox.prototype.refresh = function () {
	var text = '';
	var maxLength = this.width - this.textPadding() * 2 - this.padding * 2;
	this._text.split(" ").forEach(function (word, index) {
		if (this.textWidthEx(text + " " + word) > maxLength) {
			text += '\n' + word;
		} else {
			text += (index == 0 ? '' : " ") + word;
		}
	}, this);
	this.drawTextEx(text, 0, 0);
};
```