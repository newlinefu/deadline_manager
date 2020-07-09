import React 		from 'react'
import Task 		from '../../single_task/SingleTask'
import styles 		from './other_categories_tasks.module.css'
import {NavLink} 	from 'react-router-dom'

export default function OtherCategoriesTasks({allTasks, activateCorrectMode, addCorrectedTask, filterCB}) {

	return (
		<div className = {styles.active_tasks_wrapper}>
		{
			allTasks 
			? allTasks.filter(filterCB).map(task => {
				return <Task
					title 				= {task.title}
					description 		= {task.description}
					dateOfCreation 		= {task.dateOfCreation}
					dateOfLastChange 	= {task.dateOfLastChange}
					deadline 			= {task.deadline}
					activateCorrectMode = {activateCorrectMode}
					addCorrectedTask 	= {addCorrectedTask}
				></Task>
			})
			: null
		}
		</div>
	)
}