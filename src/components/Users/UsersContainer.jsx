import Users from './Users'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		Users: state.users.Users
	}
}

const UsersContainer = connect(mapStateToProps)(Users)

export default UsersContainer
