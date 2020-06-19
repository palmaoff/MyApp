import React from 'react'
import css from './NewPost.module.css'
import { addPostActionCreator } from '../../../redux/content_reducer'
import { NewFieldTextActionCreater } from '../../../redux/content_reducer'

let newPost = React.createRef();

const NewPost = (props) => {
	const onAddPost = () => {
		let text = newPost.current.value
		props.addPost(text)
	}

	let enterKey = (event) => {
		if (event.key === "Enter") {
			let text = newPost.current.value
			props.addPost(text)
		}
	}

	const ChangeField = () => {
		let text = newPost.current.value
		props.updateField(text)
	}

	return (
		<div>
			<div>
				<textarea
					ref={newPost}
					onChange={ChangeField}
					value={props.FieldText}
					onKeyPress={enterKey}
					placeholder="Enter something"
				/>
			</div>
			<div>
				<button onClick={onAddPost}>add post</button>
			</div>
		</div>
	);
}

export default NewPost
