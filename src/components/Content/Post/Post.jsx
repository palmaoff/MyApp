import React from 'react'
import css from './Post.module.css'

const Post = (props) => {
	return (
		<div className={css.item}>
			<div>
				<img src = 'https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkiLiYuaJJi94n5n3y1sJXmaaKTM5SRkZCeTgDn6uOyic'></img>
			</div>
			<div className={css.message}>
				<div>{props.message}</div>
			</div>
		</div>
	);
}

export default Post
