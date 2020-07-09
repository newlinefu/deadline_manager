import {
	getCountOfUsersFromLS, 
	getArrayOfUsersFromLS,
	setAuthorizateInStateAC
} from './auth_reducer.js'
import {addAllTasksToState} from './my_tasks_reducer.js'

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
		type: 			INITIALIZE_APP,
		initialized: 	true
	}
}

export function initializeApplic() {
	return (dispatch, getState) => {
		const getCountOfUsers = dispatch(getCountOfUsersFromLS())
		const getArrayOfUsers = dispatch(getArrayOfUsersFromLS())
		
		Promise.all([getCountOfUsers, getArrayOfUsers])
			.then(() => {
				if(getState().authorize.countOfUsers === 1) {
					const nameOfUser = getState().authorize.arrayOfUsers[0]
					dispatch(setAuthorizateInStateAC(nameOfUser))
					dispatch(addAllTasksToState())
				}
				return true
			})
			.then(() => dispatch(initializeAppAC()))
	}
}