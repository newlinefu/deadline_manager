import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './change_task.module.css'

function ChangeTaskForm({
	handleSubmit, deactivateCorrectMode, deleteTaskInLSAndState, correctedTask, addCorrectedTask
}) {

	function deleteTask() {
		deleteTaskInLSAndState(correctedTask.title)
		deactivateCorrectMode()
		addCorrectedTask(null)
	}

	function parseJSONDate(dateMill) {
		const dateStringJSON = (new Date(dateMill)).toJSON()
		return `${dateStringJSON.slice(0, dateStringJSON.indexOf('T'))} 
				${dateStringJSON.slice(dateStringJSON.indexOf('T') + 1, dateStringJSON.indexOf('Z') - 7)}`
	}

	function goBack() {
		deactivateCorrectMode()
		addCorrectedTask(null)
	}

	return (
		<form onSubmit={handleSubmit} className = {styles.change_task_wrapper}>
			<div className = {styles.title}>
				{correctedTask.title}
			</div>
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
			<div className = {styles.unchanged_date}>
				<span>Время создания:</span> {parseJSONDate(correctedTask.dateOfCreation)}
			</div>
			{correctedTask.dateOfCreation === correctedTask.dateOfLastChange || (
				<div className = {styles.unchanged_date}>
					<span>Последнее изменение:</span> {parseJSONDate(correctedTask.dateOfLastChange)}
				</div>
			)}
			<div className = {styles.buttons_wrapper}>
				<button type='submit' className = {styles.form_btn}>Изменить</button>
				<button 
					type='button' 
					className = {styles.form_btn} 
					onClick = {deleteTask}>Удалить
				</button>
				<button type='button' className = {styles.form_btn} onClick = {goBack}>Назад</button>
			</div>
		</form>
	)
}

export default reduxForm({
	
	form: 'ChangeTaskForm'

})(ChangeTaskForm)