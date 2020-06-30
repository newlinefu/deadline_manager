import React from 'react'

export default function MyInformation({
	name, clearAuth, deleteUser, setAddingNewUserMode, setAuthorizateInStateAC
}) {

	function addNewUser() {
		setAddingNewUserMode(name)
		clearAuth()
	}

	return (
		<div>
			<div>
				{name}
			</div>
			<div>
				<button onClick = {clearAuth}>Сменить пользователя</button>
			</div>
			<div>
				<button onClick = {addNewUser}>Добавить пользователя</button>
			</div>
			<div>
				<button onClick = {deleteUser}>Удалить пользователя</button>
			</div>
		</div>
	)
}