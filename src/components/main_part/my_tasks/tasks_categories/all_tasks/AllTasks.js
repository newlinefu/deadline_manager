import React from 'react'
import Task from '../../single_task/SingleTask'
import styles from './all_tasks.module.css'
import {NavLink} from 'react-router-dom'

export default function AllTasks({allTasks, activateCorrectMode, addCorrectedTask}) {

	return (
		<div className = {styles.all_tasks_wrapper}>
		{
			allTasks
			? allTasks.map(task => {
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
			: null
		}
		<button onClick = {activateCorrectMode} className = {styles.add_new_task}><span>+</span></button>
		</div>
	)
}