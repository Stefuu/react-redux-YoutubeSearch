
import { INPUT_CHANGE, IS_FETCHING, RECEIVE_ITENS } from '../actions'

export default (state = {}, action) => {
	switch(action.type){
		case INPUT_CHANGE :
			return {
				...state,
				term: action.payload
			}
		break;
		case IS_FETCHING :
			return {
				...state,
				isFetching: action.payload
			}
		break;
		case RECEIVE_ITENS :
			return {
				...state,
				videos: action.payload
			}
		break;
		default:
			return state
		break;
	}
}