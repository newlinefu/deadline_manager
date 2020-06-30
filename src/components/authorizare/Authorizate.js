import React from 'react'
import AuthorizateFormWithoutUsers from './AuthorizateFormWithoutUsers'
import AuthorizateForm from './AuthorizateForm'

function Authorizate({
	countOfUsers, putUserToLS, arrayOfUsers, setAuthorizateInState, addAllTasksToState, 
	addingNewUser, setAddingNewUserMode
}) {

	function registrateUser(formData) {
		putUserToLS(formData.input_name)
		setAddingNewUserMode(null)
	}

	function authorize(formData) {
		setAuthorizateInState(formData.user)
		addAllTasksToState()
		setAddingNewUserMode(null)
	}

	if(countOfUsers === 0 || addingNewUser) 
		return <AuthorizateFormWithoutUsers
			onSubmit = {registrateUser}
			addingNewUser = {addingNewUser}
			authorize = {authorize}
		></AuthorizateFormWithoutUsers>
	else
		return <AuthorizateForm
			arrayOfUsers = {arrayOfUsers}
			onSubmit={authorize}
		></AuthorizateForm>
}

export default Authorizate