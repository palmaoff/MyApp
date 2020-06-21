import React from 'react'
import NewPostContainer from './NewPost/NewPostContainer'
import Content from './Content'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		Posts: state.content.Posts
	}
}

let mapDispatchToProps = (dispatch) => {}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer