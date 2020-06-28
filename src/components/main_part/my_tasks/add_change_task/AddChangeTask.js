import React from 'react'
import AddChangeTaskForm from './AddChangeTaskForm'
import {request} from '../../../../local_storage_api/local_storage_api.js'
import { browserHistory } from 'react-router'

export default function AddChangeTask({name, addTaskToLSAndState}) {

	function addNewTask(formData) {
		addTaskToLSAndState(formData.title, formData.description, `${formData.date_deadline} ${formData.time_deadline}`)
	}

	return (
		<div>
			<AddChangeTaskForm onSubmit={addNewTask}></AddChangeTaskForm>
		</div>
	)
}