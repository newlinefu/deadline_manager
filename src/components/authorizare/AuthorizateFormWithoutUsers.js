import React from 'react'
import {Field, reduxForm} from 'redux-form'
import styles from './authorizate.module.css'

function AuthorizateFormWithoutUsers({handleSubmit, addingNewUser, authorize}) {
	
	function goBack() {
		authorize({user: addingNewUser})
	}
	return (
		<form onSubmit = {handleSubmit} className={styles.authorizate_form_without_users_wrapper}>
			<p>У вас пока нет пользователей. Введите имя нового пользователя, чтобы иметь возможность 
			управлять заметками</p>
			<div>
				<Field
					component='input'
					type='text'
					name = 'input_name'
					className = {styles.input_auth_form}
					placeholder = 'Enter username'
				></Field>
			</div>
			<div>
				<button type='submit' className = {styles.submit_auth_button}>Add</button>
				{!addingNewUser || <button type = 'button' onClick = {goBack}>Назад</button>}
			</div>
		</form>
	)
}

export default reduxForm({

	form: 'authorizateFormWithoutUsers'

})(AuthorizateFormWithoutUsers)