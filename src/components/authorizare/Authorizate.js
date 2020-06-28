import React from 'react'
import AuthorizateFormWithoutUsers from './AuthorizateFormWithoutUsers'
import AuthorizateForm from './AuthorizateForm'

function Authorizate({countOfUsers, putUserToLS, arrayOfUsers, setAuthorizateInState, addAllTasksToState}) {

	function registrateUser(formData) {
		putUserToLS(formData.input_name)
	}

	function authorize(formData) {
		setAuthorizateInState(formData.user)
		addAllTasksToState()
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