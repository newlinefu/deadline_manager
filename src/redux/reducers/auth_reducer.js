import {request} from '../../local_storage_api/local_storage_api.js'

const SET_AUTH_IN_STATE = 'SET_AUTH_IN_STATE'
const SET_COUNT_OF_USERS = 'SET_COUNT_OF_USERS'
const SET_ARRAY_OF_USERS = 'SET_ARRAY_OF_USERS'

const defaultState = {
	name: null,
	countOfUsers: null,
	arrayOfUsers: null
}

export default function authReducer(state = defaultState, action) {
	switch (action.type) {
		case (SET_AUTH_IN_STATE):
			return {
				...state,
				name: action.name
			}
		case (SET_COUNT_OF_USERS):
			return {
				...state,
				countOfUsers: action.count
			}
		case (SET_ARRAY_OF_USERS):
			return {
				...state,
				arrayOfUsers: action.arrayOfUsers
			}
		default:
			return state
	}
}

function setAuthorizateInStateAC(name) {
	return {
		type: SET_AUTH_IN_STATE,
		name
	}
}

function setCountOfUsersAC(count) {
	return {
		type: SET_COUNT_OF_USERS,
		count
	}
}

function setArrayOfUsersAC(arrayOfUsers) {
	return {
		type: SET_ARRAY_OF_USERS,
		arrayOfUsers: [...arrayOfUsers]
	}
}

function getCountOfUsersFromLS() {
	return async (dispatch) => {
		const response = await request.getListLenghtCreatedUsersFromLocalStorage()
		dispatch(setCountOfUsersAC(response))
	}
}

function getArrayOfUsersFromLS() {
	return async (dispatch) => {
		const respone = await request.getArrayOfAllUsersFromLocalStorage()
		dispatch(setArrayOfUsersAC(respone))
	}
}

function putUserToLS(name) {
	return async (dispatch) => {
		await request.putUserToLocalStorage(name)
		await Promise.all([dispatch(getCountOfUsersFromLS()), dispatch(getArrayOfUsersFromLS())])
	}
}


export {
	setAuthorizateInStateAC,
	getCountOfUsersFromLS,
	putUserToLS,
	getArrayOfUsersFromLS
}

