import React from 'react'
import { addPostActionCreator } from '../../../redux/state'
import { NewFieldTextActionCreater } from '../../../redux/state'
import NewPost from './NewPost'
import { connect } from 'react-redux'

const NEW_FIELD_TEXT = 'NEW-FIELD-TEXT'

// const NewPostContainer = (props) => {
// 	const addPost = (text) => {
// 		props.store.dispatch(addPostActionCreator(text))
// 		props.store.dispatch(NewFieldTextActionCreater(''))
// 	}

// 	const updateField = (text) => {
// 		props.store.dispatch(NewFieldTextActionCreater(text))
// 	}
// 	return (
// 		<NewPost
// 			updateField={updateField}
// 			addPost={addPost}
// 			FieldText={props.store.getState().content.FieldText}
// 		/>
// 	);
// }

let mapStateToProps = (state) => {
	return {
		FieldText: state.content.FieldText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: (text) => {
			dispatch(addPostActionCreator(text))
			dispatch(NewFieldTextActionCreater(''))
		},
		updateField: (text) => {
			dispatch(NewFieldTextActionCreater(text))
		}
	}
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer
