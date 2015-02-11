(function(){
	'use strict';
	function Button(label, color){
		this.Container_constructor();

		this.label = label;
		this.color = color;

		this.setup();
	}
	//createja.extend(subclass, superclass)
	var p = createjs.extend(Button, createjs.Container);

	p.setup = function(){

		var text = new createjs.Text(this.label, "20px Arial", "#000");

		var width = text.getMeasuredWidth() + 30;
		var height = text.getMeasuredHeight() + 20;

		text.x = width/2;
		text.y = 10;
		text.textAlign = "center";
		text.textBaseline = "top";

		var background = new createjs.Shape();
		background.graphics.s('#000');
		background.graphics.f(this.color).rr(0,0,width, height, 10);
		this.addChild(background, text);

		this.on('click', this.handleClick);
		this.on('rollover', this.handleRollOver);
		this.on('rollout', this.handleRollOver);
		this.cursor = "pointer";
	};
	p.handleClick = function(event){
		alert('You\'ve just clicked:  " ' + this.label + ' " button');
	};

	p.handleRollOver = function(event){
		this.alpha = event.type == 'rollover' ? 0.4 : 1;
	};

	//createjs.promote(subclass, prefix), It is recommended to use the super class's name as the prefix.
	window.Button = createjs.promote(Button, "Container");
}());