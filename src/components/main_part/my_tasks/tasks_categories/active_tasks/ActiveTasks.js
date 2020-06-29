import React from 'react'
import Task from '../../single_task/SingleTask'
import styles from './active_tasks.module.css'
import {NavLink} from 'react-router-dom'

export default function ActiveTasks({allTasks, activateCorrectMode, addCorrectedTask}) {

	return (
		<div className = {styles.active_tasks_wrapper}>
		{
			allTasks.filter(task => task.deadline > Date.now() + 1000*60*60*3).map(task => {
				return <Task
					title = {task.title}
					description = {task.description}
					dateOfCreation = {task.dateOfCreation}
					dateOfLastChange = {task.dateOfLastChange}
					deadline = {task.deadline}
					activateCorrectMode = {activateCorrectMode}
					addCorrectedTask = {addCorrectedTask}
				></Task>
			})
		}
		</div>
	)
}