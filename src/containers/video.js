import { connect } from 'react-redux'
import { onVideoClick } from '../actions'
import Video from '../components/video'

const mapDispatchToProps = dispatch => {
	return {
		onVideoClick: (video) => {
			dispatch(onVideoClick(video))
		}
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Video)