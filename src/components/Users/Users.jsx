import React from 'react'
import User from './User/User'

const Users = (props) => {
	let allUsers = props.Users.map(i => <User name={i.name} />)

	return (
		<div>
			{allUsers}
		</div>
	)
}

export default Users
