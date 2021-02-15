enum OutputType {
	STRING, NUMBER
}

// Type Alias for Union Types
type Combinable = number | string;

function combine(n1: Combinable, n2: Combinable, outputType: OutputType) {
	let result;
	if ((typeof n1 === 'number' && typeof n2 === 'number') || outputType === OutputType.NUMBER) {
		result = +n1 + +n2;
	} else {
		result = n1.toString() + n2.toString();
	}

	return result;
}

// eslint-disable-next-line no-console
console.log(combine(10, 5, OutputType.STRING));

// eslint-disable-next-line no-console
console.log(combine('Woodie', 'Westbrook', OutputType.NUMBER));
