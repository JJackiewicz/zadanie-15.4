'use strict';

// Zadanie 1
var hello = 'Hello';
var world = 'World!';

console.log(hello + ' ' + world);

// Zadanie 2
var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};
console.log(multiply(2, 5));
console.log(multiply(7));

// Zadanie 3
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var total = 0;
    for (var i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total / args.length;
};
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

// Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// Zadanie 5
var names = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = names[2],
    lastName = names[4];

console.log(firstName + ' ' + lastName);
