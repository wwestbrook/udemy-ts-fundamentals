function add(n1: number, n2: number, showResult: boolean, message: string) {
	const result = n1 + n2;

	if (showResult) {
		// eslint-disable-next-line no-console
		console.log(`${message} ${result}`);
	}
	return result;
}

// eslint-disable-next-line no-console
console.log(add(10, 5, true, 'woodie said: '));
