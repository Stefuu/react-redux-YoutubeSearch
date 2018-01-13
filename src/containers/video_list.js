import { connect } from 'react-redux'
import VideoList from '../components/video_list'

const mapStateToProps = state => {
	const { videos, isFetching } = state.searchBar
	const currentVideo = state.video.current
	return {
		videos,
		isFetching,
		currentVideo
	}
}

export default connect(
	mapStateToProps
)(VideoList)