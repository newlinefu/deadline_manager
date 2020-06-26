import React from 'react'
import {getCountOfUsersFromLS} from '../../redux/reducers/auth_reducer.js'
import AuthorizateFormWithoutUsers from './AuthorizateFormWithoutUsers'
import AuthorizateForm from './AuthorizateForm'

function Authorizate({countOfUsers, putUserToLS, arrayOfUsers, setAuthorizateInState}) {

	function registrateUser(formData) {
		putUserToLS(formData.input_name)
	}

	function authorize(formData) {
		setAuthorizateInState(formData.user)
	}

	if(countOfUsers === 0) 
		return <AuthorizateFormWithoutUsers
			onSubmit = {registrateUser}
		></AuthorizateFormWithoutUsers>
	else
		return <AuthorizateForm
			arrayOfUsers = {arrayOfUsers}
			onSubmit={authorize}
		></AuthorizateForm>
}

export default Authorizate