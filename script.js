// Zadanie 1
const hello = 'Hello';
const world = 'World!';

console.log(`${hello} ${world}`);

// Zadanie 2
const multiply = (a=1, b=1) => {return a * b};
console.log(multiply(2, 5));
console.log(multiply(7));

// Zadanie 3
const average = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
		total += args[i];
	}
    return total / args.length;
  };
console.log(average(1));
console.log(average(1, 3,));
console.log(average(1, 3, 6, 6));

// Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// Zadanie 5
const names = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = names;
console.log(`${firstName} ${lastName}`);
