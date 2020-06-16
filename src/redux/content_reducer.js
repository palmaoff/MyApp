const ADD_POST = 'ADD-POST'
const NEW_FIELD_TEXT = 'NEW-FIELD-TEXT'

let init_state = {
	FieldText: '',
	Posts: [
		{ id: 1, message: 'start here' }
	]
}

export const NewFieldTextActionCreater = (text) => {
	return {
		type: NEW_FIELD_TEXT,
		text: text
	}
}

export const addPostActionCreator = (text) => {
	return {
		type: ADD_POST,
		text: text
	}
}

let content_reduce = (state = init_state, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.Posts[0].id + 1,
				message: action.text
			}
			if (action.text != false) {
				state.Posts.unshift(newPost)
			}
			return state
		case NEW_FIELD_TEXT:
			if (action.text !== '\n') {
				state.FieldText = action.text
			}
			return state
		default:
			return state
	}
}

export default content_reduce
