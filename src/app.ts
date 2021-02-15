function addNumbers(n1: number, n2: number): number {
	return n1 + n2;
}

// eslint-disable-next-line no-console
console.log(addNumbers(10, 5));

let addStuff: (a: number, b: number) => number;

// eslint-disable-next-line prefer-const
addStuff = addNumbers;

// eslint-disable-next-line no-console
console.log(addStuff(1, 1));

function logData(data: string) {
	// eslint-disable-next-line no-console
	console.log(data);
}

logData('good');
