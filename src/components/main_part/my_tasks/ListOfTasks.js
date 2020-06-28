import React from 'react'
import {Route} from 'react-router-dom'
import OverdueTasks from './tasks_categories/overdue_tasks/OverdueTasks'
import ActiveTasks from './tasks_categories/active_tasks/ActiveTasks'
import AllTasks from './tasks_categories/all_tasks/AllTasks'

export default function ListOfTasks({activateCorrectMode, allTasks}) {

	return (
		<div>
			<Route path = '/my_tasks/all_tasks' render = {() => (
				<AllTasks
					allTasks = {allTasks}
					activateCorrectMode = {activateCorrectMode}
				></AllTasks>
			)}></Route>
			<Route path = '/my_tasks/active_tasks' render = {() => (
				<ActiveTasks
					allTasks = {allTasks}
				></ActiveTasks>
			)}></Route>
			<Route path = '/my_tasks/overdue_tasks' render = {() => (
				<OverdueTasks
					allTasks = {allTasks}
				></OverdueTasks>
			)}></Route>
			<Route path = '/my_tasks/overdue_tasks' render = {() => (
				<OverdueTasks
					allTasks = {allTasks}
				></OverdueTasks>
			)}></Route>
		</div>
	)
}