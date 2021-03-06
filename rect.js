(function (window, document) {
	var body = document.body;
	var de = document.documentElement;
	var can = document.createElement('canvas');
	var width = can.width = Math.max(window.innerWidth, de.clientWidth, body.clientWidth);
	var height = can.height = Math.max(window.innerHeight, de.clientHeight, body.clientHeight);

	var s = can.style;
	s.position = 'absolute';
	s.left = s.top = 0;
	s.width = width + "px";
	s.height = height + "px";
	s.zIndex = 10000;
	s.cursor = 'crosshair';
	body.appendChild(can);

	var ctx = can.getContext("2d");
	ctx.strokeStyle = (typeof BDColor != 'undefined') ? "#" + BDColor : "#000";
	ctx.lineWidth = 3;

	var down = false;
	var start = {x: 0, y: 0};

	function addEventListener(on, event, func) {
		on.addEventListener(event, func);
	}

	addEventListener(can, "mousedown", function (e) {
		start.x = e.pageX;
		start.y = e.pageY;
		down = true;
	});

	addEventListener(can, "mouseup", function () {
		down = false;
	});

	addEventListener(can, "mousemove", function (e) {
		if (down) {
			var x = e.pageX, y = e.pageY;
			ctx.strokeStyle = (typeof BDColor != 'undefined') ? "#" + BDColor : "#000";
			ctx.clearRect(0, 0, width, height);
			ctx.beginPath();
			ctx.rect(start.x, start.y, x - start.x, y - start.y);
			ctx.stroke();
		}
	});

	addEventListener(body, 'keydown', keydown);

	function keydown(e) {
		if (e.which == 27) {
			body.removeChild(can);
			body.removeEventListener('keydown', keydown);
		}
	}

})(window, document);