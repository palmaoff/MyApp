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

	let stateCopy = { ...state }

	switch (action.type) {
		case ADD_POST:
			stateCopy.Posts = [...state.Posts]
			let newPost = {
				id: state.Posts[0].id + 1,
				message: action.text
			}
			if (action.text != false) {
				stateCopy.Posts.unshift(newPost)
			}
			return stateCopy
		case NEW_FIELD_TEXT:
			let stateField = { ...state }
			if (action.text !== '\n') {
				stateCopy.FieldText = action.text
			}
			return stateCopy
		default:
			return state
	}
}

export default content_reduce
