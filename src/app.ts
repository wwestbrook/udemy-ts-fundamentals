const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: 'Woodie Westbrook',
	age: 46,
	hobbies: ['cycling', 'gaming', 'madlibs', 'ww'],
	role: [1, 'admin']
};

// person.role.push('woodie')

// eslint-disable-next-line no-console
console.log(person);
person.hobbies.forEach((x) => {
	console.log(x);
});
