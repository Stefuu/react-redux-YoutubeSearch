
import { VIDEO_CLICK } from '../actions'

export default (state = {}, action) => {
	switch(action.type){
		case VIDEO_CLICK :
			return {
				...state,
				current: action.payload
			}
		break;
		default:
			return state
		break;
	}
}