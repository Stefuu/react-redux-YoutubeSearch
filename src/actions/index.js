import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyDBrDZbn8B-hOq_yQEIN8trJEsKnJGDMcs'

export const INPUT_CHANGE = 'INPUT_CHANGE'
export const IS_FETCHING = 'IS_FETCHING'
export const RECEIVE_ITENS = 'RECEIVE_ITENS'
export const VIDEO_CLICK = 'VIDEO_CLICK'

export const onInputChange = (term) => {
	return {
		type: INPUT_CHANGE,
		payload: term
	}
}

export const onSubmit = (term) => {
	return function(dispatch){
		dispatch(isFetching(true))

		return YTSearch({key: API_KEY, term}, function(data){
			dispatch(receiveItens(data))
			dispatch(isFetching(false))
		})
	}
}

export const isFetching = (bool) => {
	return {
		type: IS_FETCHING,
		payload: bool
	}
}

export const receiveItens = (data) => {
	return {
		type: RECEIVE_ITENS,
		payload: data
	}
}

export const onVideoClick = (video) => {
	return {
		type: VIDEO_CLICK,
		payload: video
	}
}
