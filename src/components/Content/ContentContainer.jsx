import React from 'react'
import NewPostContainer from './NewPost/NewPostContainer'
import Content from './Content'
import { connect } from 'react-redux'

const ContentContainer = (props) => {
	let state = props.store.getState()

	const NewPost = (
		<NewPostContainer store = { props.store } />
	)

	return (
		<Content 
			Posts = { state.content.Posts }
		/>
	)
}

let mapStateToProps = (state) => {
	return {
		Posts: state.content.Posts
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
	}
}

const ContentContainerToo = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer