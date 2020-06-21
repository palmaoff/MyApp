import React from 'react'
import { connect } from 'react-redux'
import { NewFieldTextActionCreater, addPostActionCreator } from './../../../redux/content_reducer'
import NewPost from './NewPost'

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
