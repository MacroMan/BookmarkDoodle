var BDColor = '000';
(function (window, document) {
	var body = document.body;

	var colors = [
		'000',
		'009',
		'090',
		'099',
		'900',
		'909',
		'990',
		'CCC',
		'999',
		'00F',
		'0F0',
		'0FF',
		'F00',
		'F0F',
		'FF0',
		'FFF'
	];

	var outer = document.createElement('div');
	var style = outer.style;
	style.position = 'fixed';
	style.left = '100px';
	style.top = '100px';
	style.zIndex = '10000';

	for (var i = 0; i < colors.length; i++) {
		outer.appendChild(addColour(colors[i]));
	}

	document.body.appendChild(outer);

	function addColour(code) {
		var div = document.createElement('div');
		div.className = code;
		var style = div.style;
		style.display = 'inline-block';
		style.backgroundColor = '#' + code;
		style.width = '25px';
		style.height = '25px';

		addEventListener(div, 'click', click);
		return div;
	}

	function click(e) {
		BDColor = e.target.className;
		remove();
	}

	addEventListener(body, 'keydown', keydown);

	function keydown(e) {
		if (e.which == 27) {
			remove();
		}
	}

	function remove() {
		body.removeChild(outer);
		body.removeEventListener('keydown', keydown);
	}

	function addEventListener(on, event, func) {
		on.addEventListener(event, func);
	}
})(window, document);