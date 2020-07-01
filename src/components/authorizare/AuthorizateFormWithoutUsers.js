import React from 'react'
import {Field, reduxForm} from 'redux-form'
import styles from './authorizate.module.css'
import ValidatedInput from '../../validated_components/ValidatedInput'
import {isEmptyConstructor} from '../../validators/validators.js'

const isEmptyAuth = isEmptyConstructor('Введите имя пользователя')

function AuthorizateFormWithoutUsers({handleSubmit, addingNewUser, authorize, loading, ...props}) {
	
	function goBack() {
		authorize({user: addingNewUser})
	}
	
	return (
		<form onSubmit = {handleSubmit} className={styles.authorizate_form_without_users_wrapper}>
			<p>
				{
					!addingNewUser
					? 'У вас пока нет пользователей. Введите имя нового пользователя, чтобы иметь возможность управлять заметками'
					: 'Добавить нового пользователя'
				}
			</p>
			<div>
				<Field
					component={ValidatedInput}
					type='text'
					name = 'input_name'
					className = {styles.input_auth_form}
					placeholder = 'Enter username'
					validate = {isEmptyAuth}
				></Field>
			</div>
			{props.error ? <div>{props.error}</div> : null}
			<div>
				{
					!loading 
					? <button type='submit' className = {styles.submit_auth_button}>Add</button>
					: <div>...Loading</div>
				}
			</div>
			{!addingNewUser || <button type = 'button' 
				onClick = {goBack} 
				className = {`${styles.submit_auth_button} ${styles.back}`}>X</button>}
		</form>
	)
}

export default reduxForm({

	form: 'authorizateFormWithoutUsers'

})(AuthorizateFormWithoutUsers)