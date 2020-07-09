import React, {useState} 	from 'react'
import AddTaskForm 			from './AddTaskForm'
import {request} 			from '../../../../local_storage_api/local_storage_api.js'

export default function AddTask({name, addTaskToLSAndState, deactivateCorrectMode}) {

	let [loading, setLoading] = useState(false)

	function addNewTask(formData) {
		setLoading(true)
		addTaskToLSAndState(formData.title, formData.description, `${formData.date_deadline}T${formData.time_deadline}:00.000Z`)
			.finally(() => setLoading(false))
	}

	function parseMinTime() {
		const dateStringJSON = (new Date(Date.now() + 1000*60*60*3)).toJSON()
		return `${dateStringJSON.slice(dateStringJSON.indexOf('T') + 1, dateStringJSON.indexOf('Z') - 7)}`
	}

	function parseMinDate() {
		const dateStringJSON = (new Date(Date.now() + 1000*60*60*3)).toJSON()
		return `${dateStringJSON.slice(0, dateStringJSON.indexOf('T'))}`
	}
	
	if(loading)
		return <div>Loading...</div>
	else
		return (
			<div>
				<AddTaskForm 
					onSubmit 				= {addNewTask} 
					deactivateCorrectMode 	= {deactivateCorrectMode}
					initialValues 			= { {
						date_deadline: parseMinDate(),
						time_deadline: parseMinTime()
					} }>
				</AddTaskForm>
			</div>
		)
}