import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './add_change_task.module.css'

function AddChangeTaskForm({handleSubmit, ...props}) {

	return (
		<form onSubmit={handleSubmit} className = {styles.add_change_task_wrapper}>
			<Field
				component='input'
				type='text'
				placeholder='Название задачи'
				name='title'
				className = {styles.input}
			></Field>
			<Field
				component='textarea'
				placeholder='Описание задачи'
				name='description'		
				className = {styles.t_a}
			></Field>
			<Field
				component='input'
				type='date'
				name='date_deadline'
				className = {styles.input}		
			></Field>
			<Field
				component='input'
				type='time'
				name='time_deadline'
				className = {styles.input}		
			></Field>
			<div className = {styles.buttons_wrapper}>
				<button type='submit'>Добавить</button>
				<button type='button'>Назад</button>
			</div>
		</form>
	)
}

export default reduxForm({
	
	form: 'AddChangeTaskForm'

})(AddChangeTaskForm)