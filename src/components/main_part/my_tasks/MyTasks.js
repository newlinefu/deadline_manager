import React from 'react'
import {Route} from 'react-router-dom'
import ListOfTasks from './ListOfTasks'
import AddChangeTask from './add_change_task/AddChangeTask'
import TasksNavigation from './tasks_navigation/TasksNavigation'
import styles from './my_tasks.module.css'

export default function MyTasks({
	name, addTaskToLSAndState, correctMode, activateCorrectMode, tasksCategories, allTasks
}) {
	if(correctMode)
		return <AddChangeTask 
						name = {name}
						addTaskToLSAndState = {addTaskToLSAndState}>
				</AddChangeTask>
	else 
		return <div className = {styles.my_tasks_wrapper}>
			<TasksNavigation
				tasksCategories = {tasksCategories}
			></TasksNavigation>
			<ListOfTasks 
				activateCorrectMode = {activateCorrectMode}
				allTasks = {allTasks}
			></ListOfTasks>
		</div>
}