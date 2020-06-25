import React from 'react'
import css from './User.module.css'

const User = (props) => {
	return (
		<div className={css.user}>
			<img
				className={css.img}
				src='https://sun9-44.userapi.com/c850416/v850416463/1fadb2/EXD3e6trts4.jpg'
				alt=""
			/>
			<div className={css.textarea}>
				<div className={css.text}>{props.name}</div>
				<div className={css.text}>sdtkbnskdfvkjsnfkbjd fjvhbdlfjnsv ejhvfb sdkjfb vlasdf vf ksdj jlsdnvkajhdfbvkankfv abkdvnkdfhbvkajndvkadfbvkjasdvjh adbkvjnbadfvoafnvbisfhovsdbisufvoaebioajf</div>
			</div>
		</div>
	)
}

export default User
