import React, {useState} from 'react'
import AuthorizateFormWithoutUsers from './AuthorizateFormWithoutUsers'
import AuthorizateForm from './AuthorizateForm'

function Authorizate({
	countOfUsers, putUserToLS, arrayOfUsers, setAuthorizateInState, addAllTasksToState, 
	addingNewUser, setAddingNewUserMode, setAuthorizateWithCondition
}) {

	let [loading, setLoading] = useState(false)

	function registrateUser(formData) {
		setLoading(true)
		putUserToLS(formData.input_name)
			.then(() => setAddingNewUserMode(null))
			.finally(() => setLoading(false))
	}

	function authorizeWithout(formData) {
		setAuthorizateInState(formData.user)
		addAllTasksToState()
		setAddingNewUserMode(null)
	}

	function authorizeWith(formData) {
		const result = setAuthorizateWithCondition(formData.user)
		if(result) {
			addAllTasksToState()
			setAddingNewUserMode(null)			
		}
	}

	if(countOfUsers === 0 || addingNewUser) 
		return <AuthorizateFormWithoutUsers
			onSubmit = {registrateUser}
			addingNewUser = {addingNewUser}
			authorize = {authorizeWithout}
			loading = {loading}
		></AuthorizateFormWithoutUsers>
	else
		return <AuthorizateForm
			arrayOfUsers = {arrayOfUsers}
			onSubmit={authorizeWith}
			loading = {loading}
		></AuthorizateForm>
}

export default Authorizate