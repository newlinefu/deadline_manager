import React from 'react'
import {Route} from 'react-router-dom'
import OverdueTasks from './tasks_categories/overdue_tasks/OverdueTasks'
import ActiveTasks from './tasks_categories/active_tasks/ActiveTasks'
import AllTasks from './tasks_categories/all_tasks/AllTasks'
import styles from './my_tasks.module.css'

export default function ListOfTasks({activateCorrectMode, allTasks, addCorrectedTask}) {
	
	return (
		<div className = {styles.list_of_tasks_wrapper}>
			<Route path = '/my_tasks/all_tasks' render = {() => (
				<AllTasks
					allTasks = {allTasks}
					activateCorrectMode = {activateCorrectMode}
					addCorrectedTask = {addCorrectedTask}
				></AllTasks>
			)}></Route>
			<Route path = '/my_tasks/active_tasks' render = {() => (
				<ActiveTasks
					allTasks = {allTasks}
					activateCorrectMode = {activateCorrectMode}
					addCorrectedTask = {addCorrectedTask}
				></ActiveTasks>
			)}></Route>
			<Route path = '/my_tasks/overdue_tasks' render = {() => (
				<OverdueTasks
					allTasks = {allTasks}
					activateCorrectMode = {activateCorrectMode}
					addCorrectedTask = {addCorrectedTask}
				></OverdueTasks>
			)}></Route>
		</div>
	)
}