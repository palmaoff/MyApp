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
		<Content NewPost = { NewPost }
			Posts = { state.content.Posts } />
	)
}

// let mapStateToProps = (state) => {

// 	const NewPost = (
// 		<NewPostContainer store={props.store} />
// 	) // trouble with store... fix it

// 	return {
// 		NewPost: NewPost,
// 		Posts: state.content.Posts
// 	}
// }

// const ContentContainerToo = connect(mapStateToProps)(Content)

export default ContentContainer