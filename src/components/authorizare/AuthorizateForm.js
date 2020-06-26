import React from 'react'
import {Field, reduxForm} from 'redux-form'
import styles from './authorizate.module.css'

function AuthorizateForm({arrayOfUsers, handleSubmit}) {
	return (
		<form onSubmit={handleSubmit} className={styles.authorizate_form_without_users_wrapper}>
			<p>
				Ваши аккаунты:
			</p>
			<div className={styles.auth_radios_wrapper}>
			{
				arrayOfUsers.map((username, key) => {
					return (
							<div key={key} className={styles.auth_radio}>
								<Field
									key={key}
									component='input'
									type='radio'
									name='user'
									value={username}
								></Field>
								<span>{username}</span>
							</div>
						)
					})
			}
			</div>
			<button type='submit' className={styles.submit_auth_button}>Authorize</button>
		</form>
	)
}

export default reduxForm({

	form: 'AuthorizateForm'

})(AuthorizateForm)
