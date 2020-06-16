import React from 'react'
import css from './Content.module.css'
import Post from './Post/Post'

const Content = (props) => {

	let blogElements = props.Posts.map((i) => <Post message={i.message} />)

	return (
		<div className={css.content}>
			<div className={css.blog}>
				{blogElements}
			</div>
			<div className={css.new_post}>
				{props.NewPost}
			</div>
		</div>
	);
}

export default Content