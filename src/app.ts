function combine(n1: number | string, n2: number | string) {
	let result;
	if (typeof n1 === 'number' && typeof n2 === 'number') {
		result = n1 + n2;
	} else {
		result = n1.toString() + n2.toString();
	}

	return result;
}

// eslint-disable-next-line no-console
console.log(combine(10, 5));

// eslint-disable-next-line no-console
console.log(combine('Woodie', 'Westbrook'));
