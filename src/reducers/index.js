import { combineReducers } from 'redux';
import searchBar from './search_bar'
import video from './video'

const rootReducer = combineReducers({
  searchBar,
  video
});

export default rootReducer;
