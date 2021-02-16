class Department {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}

const dept = new Department('IT');
// eslint-disable-next-line no-console
console.log(dept);
