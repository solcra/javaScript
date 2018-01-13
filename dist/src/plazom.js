'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = plazom;
function plazom(str) {
	var translation = str;

	//Si la palabra termina con "ar"
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}
	// si la palabra inicia con z añade pe
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}
	// si la palabra tine mas de 10 caratenes partir a la mitad
	var length = translation.length;
	if (length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(Math.round(length / 2));
		translation = firstHalf + '-' + secondHalf;
	}
	// si la palabra es un palindrome
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var legth = str.length;
		var translation = '';
		var capitalize = true;
		for (var i = 0; i < legth; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return translation;
	}
	if (str == reverse(str)) {
		return minMay(str);
	}
	return translation;
}