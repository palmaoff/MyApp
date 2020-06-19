let init_state = {
	Users: [
		{
			id: 1, 
			email: 'first_email@test.ru'
		}
	]
}

let users_reduce = (state = init_state, action) => {
	return state;
}

export default users_reduce
