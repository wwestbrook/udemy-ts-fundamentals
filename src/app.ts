function Logger(argument: string) {
	// eslint-disable-next-line @typescript-eslint/ban-types
	return (target: Function) => {
		console.log(argument);
		console.log(target);
	};
}

@Logger('LOG CODE HERE')
class Person {
	name = 'Woodie';

	constructor() {
		console.log('person class created');
	}
}

const pers = new Person();
console.log(pers);
