import { connect } from 'react-redux'
import SearchBar from '../components/search_bar'
import { onInputChange, onSubmit } from '../actions'

const mapStateToProps = state => {
	return {
		term: state.searchBar.term
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onInputChange: (event) => {
			dispatch(onInputChange(event.target.value))
		},
		onSubmit: (term) => {
			dispatch(onSubmit(term))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar)