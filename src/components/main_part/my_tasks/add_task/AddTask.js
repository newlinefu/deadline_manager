import React from 'react'
import AddTaskForm from './AddTaskForm'
import {request} from '../../../../local_storage_api/local_storage_api.js'

export default function AddTask({name, addTaskToLSAndState, deactivateCorrectMode}) {

	function addNewTask(formData) {
		const dead = `${formData.date_deadline}T${formData.time_deadline}:00.000Z`
		const testDate = Date.parse(dead)
		addTaskToLSAndState(formData.title, formData.description, `${formData.date_deadline}T${formData.time_deadline}:00.000Z`)
	}

	return (
		<div>
			<AddTaskForm 
				onSubmit={addNewTask} 
				deactivateCorrectMode = {deactivateCorrectMode}>
			</AddTaskForm>
		</div>
	)
}