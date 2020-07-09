import {request} 	from '../../local_storage_api/local_storage_api.js'
import {
	clearAuthInTasks, 
	addAllTasksToState
} 					from './my_tasks_reducer.js'
import {stopSubmit} from 'redux-form'

const SET_AUTH_IN_STATE 		= 'SET_AUTH_IN_STATE'
const SET_COUNT_OF_USERS 		= 'SET_COUNT_OF_USERS'
const SET_ARRAY_OF_USERS 		= 'SET_ARRAY_OF_USERS'
const SET_ADDING_NEW_USER_MODE 	= 'SET_ADDING_NEW_USER_MODE'

const defaultState = {
	name: 			null,
	countOfUsers: 	null,
	arrayOfUsers: 	null,
	addingNewUser: 	null
}

export default function authReducer(state = defaultState, action) {
	switch (action.type) {
		case(SET_AUTH_IN_STATE):
			return {
				...state,
				name: action.name
			}
		case(SET_COUNT_OF_USERS):
			return {
				...state,
				countOfUsers: action.count
			}
		case(SET_ARRAY_OF_USERS):
			return {
				...state,
				arrayOfUsers: action.arrayOfUsers
			}
		case(SET_ADDING_NEW_USER_MODE):
			return {
				...state,
				addingNewUser: action.addingNewUserMode
			}
		default:
			return state
	}
}

export function setAuthorizateInStateAC(name) {
	return {
		type: SET_AUTH_IN_STATE,
		name
	}
}
export function setAuthorizateWithCondition(name) {
	return dispatch => {
		if(name){
			dispatch(setAuthorizateInStateAC(name))
			return true
		}
		else {
			dispatch(stopSubmit('AuthorizateForm', {_error: 'Выберите аккаунт'}))
			return false
		}
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

export function setAddingNewUserMode(addingNewUserMode) {
	return {
		type: SET_ADDING_NEW_USER_MODE,
		addingNewUserMode
	}
}

export function getCountOfUsersFromLS() {
	return async (dispatch) => {
		const response = await request.getListLenghtCreatedUsersFromLocalStorage()
		dispatch(setCountOfUsersAC(response))
	}
}

export function getArrayOfUsersFromLS() {
	return async (dispatch) => {
		const respone = await request.getArrayOfAllUsersFromLocalStorage()
		dispatch(setArrayOfUsersAC(respone))
	}
}

export function putUserToLS(name) {
	return async (dispatch, getState) => {
		const response = await request.putUserToLocalStorage(name)
		if(response) {
			await Promise.all([ dispatch(getCountOfUsersFromLS()), dispatch(getArrayOfUsersFromLS()) ])
			if(getState().authorize.countOfUsers === 1){
				dispatch(setAuthorizateInStateAC(name))
				await dispatch(addAllTasksToState())
			}			
		} else {
			dispatch(stopSubmit('authorizateFormWithoutUsers', {_error: 'Данный пользователь уже существует'}))
			return Promise.reject('Данный пользователь уже существует')
		}

	}
}

export function clearAuth() {
	return (dispatch) => {
		dispatch(setAuthorizateInStateAC(null))
		dispatch(clearAuthInTasks())
	}
}

export function deleteUser() {
	return async (dispatch, getState) => {
		const name 		= getState().authorize.name
		const response 	= await request.deleteUserFromLocalStorage(name)
		if(response) {

			const getCountOfUsers = dispatch(getCountOfUsersFromLS())
			const getArrayOfUsers = dispatch(getArrayOfUsersFromLS())

			await Promise.all([getCountOfUsers, getArrayOfUsers])
			dispatch(clearAuth())
		}
	}
}

