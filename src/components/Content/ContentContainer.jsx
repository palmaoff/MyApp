import Content from './Content'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		Posts: state.content.Posts
	}
}

const ContentContainer = connect(mapStateToProps)(Content)

export default ContentContainer
