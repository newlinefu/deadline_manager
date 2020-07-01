import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './add_task.module.css'
import ValidatedInput from '../../../../validated_components/ValidatedInput'
import {isEmptyConstructor} from '../../../../validators/validators.js'

const isEmptyAddTask = isEmptyConstructor('Введите название задачи')

function AddTaskForm({handleSubmit, deactivateCorrectMode, ...props}) {

	return (
		<form onSubmit={handleSubmit} className = {styles.add_task_wrapper}>
			<Field
				component={ValidatedInput}
				type='text'
				placeholder='Название задачи'
				name='title'
				className = {styles.input}
				validate = {isEmptyAddTask}
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
			{props.error ? <div>{props.error}</div> : null}
			<div className = {styles.buttons_wrapper}>
				<button type='submit' className = {styles.form_btn}>Добавить</button>
				<button type='button' className = {styles.form_btn} onClick = {deactivateCorrectMode}>Назад</button>
			</div>
		</form>
	)
}

export default reduxForm({
	
	form: 'AddTaskForm'

})(AddTaskForm)