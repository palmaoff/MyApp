import content_reduce from "./content_reducer";

const ADD_POST = 'ADD-POST'
const NEW_FIELD_TEXT = 'NEW-FIELD-TEXT'

let store = {
	_state: {
		FieldText: '',
		Posts: [
			{ id: 4, message: 'hi' },
			{ id: 3, message: 'booom' },
			{ id: 2, message: 'thats different' },
			{ id: 1, message: 'heh' }
		]
	},
	getState() {
		return this._state
	},

	addPost(text) {
		let newPost = {
			id: this.getState().Posts[0].id + 1,
			message: text
		}
		this.getState().Posts.unshift(newPost);
	},

	dispatch(action) {
		content_reduce(this._state, action);
		this.rerenderAll(this);
	},
	subscribe(observer) {
		this.rerenderAll = observer;
	},
	rerenderAll() {}
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

export default store;
window.store = store;