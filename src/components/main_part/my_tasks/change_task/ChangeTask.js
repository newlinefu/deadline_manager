import React, {useState} 	from 'react'
import ChangeTaskForm 		from './ChangeTaskForm'
import {request} 			from '../../../../local_storage_api/local_storage_api.js'

export default function ChangeTask({
	deactivateCorrectMode, changeTaskInStateAndLS, addCorrectedTask, correctedTask, deleteTaskInLSAndState
}) {

	let [loading, setLoading] = useState(false)

	function changeTask(formData) {
		setLoading(true)
		changeTaskInStateAndLS(correctedTask.title, formData.description, `${formData.date_deadline}T${formData.time_deadline}:00.000Z`)
		.then(() => {
			addCorrectedTask(null)
			deactivateCorrectMode()			
		})
		.finally(() => setLoading(false))
	}
	
	const deadlineString = (new Date(correctedTask.deadline)).toJSON()
	
	if(loading)
		return <div>Loading...</div>
	else
		return (
			<div>
				<ChangeTaskForm 
					onSubmit 				={changeTask} 
					deactivateCorrectMode 	= {deactivateCorrectMode}
					deleteTaskInLSAndState 	= {deleteTaskInLSAndState}
					correctedTask 			= {correctedTask}
					deactivateCorrectMode 	= {deactivateCorrectMode}
					addCorrectedTask 		= {addCorrectedTask}
					setLoading 				= {setLoading}
					initialValues 			= { {
						description: correctedTask.description,
						date_deadline: deadlineString.slice(0, deadlineString.indexOf('T')),
						time_deadline: deadlineString.slice(deadlineString.indexOf('T') + 1, deadlineString.indexOf('Z') - 7)
					} }
					></ChangeTaskForm>
			</div>
		)
}