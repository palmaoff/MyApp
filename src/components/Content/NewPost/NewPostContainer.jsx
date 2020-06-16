import React from 'react'
import { addPostActionCreator } from '../../../redux/state';
import { NewFieldTextActionCreater } from '../../../redux/state';
import NewPost from './NewPost'

const NEW_FIELD_TEXT = 'NEW-FIELD-TEXT'

const NewPostContainer = (props) => {
	const addPost = (text) => {
		props.store.dispatch(addPostActionCreator(text))
		props.store.dispatch(NewFieldTextActionCreater(''))
	}

	const updateField = (text) => {
		props.store.dispatch(NewFieldTextActionCreater(text))
	}
	return (
		<NewPost updateField={updateField}
			addPost={addPost}
			FieldText={props.store.getState().content.FieldText} />
	);
}

export default NewPostContainer
