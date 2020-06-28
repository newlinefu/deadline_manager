import {getCountOfUsersFromLS, getArrayOfUsersFromLS} from './auth_reducer.js'

const INITIALIZE_APP = 'INITIALIZE_APP'

const defaultState = {
	initialized: false
}

export default function initAppReducer(state = defaultState, action) {
	switch (action.type) {
		case (INITIALIZE_APP): {
			return {
				...state,
				initialized: action.initialized
			}
		}
		default:
			return state
	}
	
}

function initializeAppAC() {
	return {
		type: INITIALIZE_APP,
		initialized: true
	}
}

function initializeApplic() {
	return (dispatch) => {
		const getCountOfUsers = dispatch(getCountOfUsersFromLS())
		const getArrayOfUsers = dispatch(getArrayOfUsersFromLS())
		
		Promise.all([getCountOfUsers, getArrayOfUsers])
			.then(() => dispatch(initializeAppAC()))
	}
}

export {
	initializeApplic
}