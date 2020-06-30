import React from 'react'
import {Route} from 'react-router-dom'
import ListOfTasks from './ListOfTasks'
import AddTask from './add_task/AddTask'
import ChangeTask from './change_task/ChangeTask'
import TasksNavigation from './tasks_navigation/TasksNavigation'
import styles from './my_tasks.module.css'

export default function MyTasks({
	name, addTaskToLSAndState, correctMode, activateCorrectMode, tasksCategories, allTasks, deactivateCorrectMode,
	correctedTask, changeTaskInStateAndLS, addCorrectedTask, deleteTaskInLSAndState
}) {

	if(correctMode && !correctedTask)
		return <AddTask 
					name = {name}
					addTaskToLSAndState = {addTaskToLSAndState}
					deactivateCorrectMode = {deactivateCorrectMode}>
				</AddTask>
	else if (correctMode && correctedTask)
		return <ChangeTask
					correctedTask = {correctedTask}
					deactivateCorrectMode = {deactivateCorrectMode}
					addCorrectedTask = {addCorrectedTask}
					changeTaskInStateAndLS = {changeTaskInStateAndLS}
					deleteTaskInLSAndState = {deleteTaskInLSAndState}
				></ChangeTask>
	else 
		return <div className = {styles.my_tasks_wrapper}>
			<TasksNavigation
				tasksCategories = {tasksCategories}
			></TasksNavigation>
			<ListOfTasks 
				activateCorrectMode = {activateCorrectMode}
				allTasks = {allTasks}
				changeTaskInStateAndLS = {changeTaskInStateAndLS}
				addCorrectedTask = {addCorrectedTask}
			></ListOfTasks>
		</div>
}