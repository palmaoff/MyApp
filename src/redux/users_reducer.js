let init_state = {
	Users: [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Tony' }
	]
}

let users_reduce = (state = init_state, action) => {
	return state;
}

export default users_reduce
