enum Role {
	ADMIN,
	READ_ONLY,
	GUEST,
	OTHER
}

const person = {
	// 	name: string;
	// 	age: number;
	// 	hobbies: string[];
	// 	role: [number, string];
	// } = {
	name: 'Woodie Westbrook',
	age: 46,
	hobbies: ['cycling', 'gaming', 'madlibs', 'ww'],
	role: Role.OTHER
};

// eslint-disable-next-line no-console
console.log(person);
