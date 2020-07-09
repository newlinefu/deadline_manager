import React 				from 'react'
import {Route} 				from 'react-router-dom'
import AllTasks 			from './tasks_categories/all_tasks/AllTasks'
import OtherCategoriesTasks from './tasks_categories/other_categories/OtherCategoriesTasks'
import styles 				from './my_tasks.module.css'

export default function ListOfTasks({activateCorrectMode, allTasks, addCorrectedTask}) {
	
	return (
		<div className = {styles.list_of_tasks_wrapper}>
			<Route path = '/my_tasks/all_tasks' render = {() => (
				<AllTasks
					allTasks 			= {allTasks}
					activateCorrectMode = {activateCorrectMode}
					addCorrectedTask 	= {addCorrectedTask}
				></AllTasks>
			)}></Route>
			<Route path = '/my_tasks/active_tasks' render = {() => (
				<OtherCategoriesTasks
					allTasks 			= {allTasks}
					activateCorrectMode = {activateCorrectMode}
					addCorrectedTask 	= {addCorrectedTask}
					filterCB 			= {task => task.deadline > Date.now() + 1000*60*60*3}
				></OtherCategoriesTasks>
			)}></Route>
			<Route path = '/my_tasks/overdue_tasks' render = {() => (
				<OtherCategoriesTasks
					allTasks 			= {allTasks}
					activateCorrectMode = {activateCorrectMode}
					addCorrectedTask 	= {addCorrectedTask}
					filterCB 			= {task => task.deadline <= Date.now() + 1000*60*60*3}
				></OtherCategoriesTasks>
			)}></Route>
			<Route path = '/my_tasks/day_tasks' render = {() => (
				<OtherCategoriesTasks
					allTasks 			= {allTasks}
					activateCorrectMode = {activateCorrectMode}
					addCorrectedTask 	= {addCorrectedTask}
					filterCB 			= {task => task.deadline - Date.now() + 1000*60*60*3  <= 1000*60*60*24 && task.deadline > Date.now() + 1000*60*60*3}
				></OtherCategoriesTasks>
			)}></Route>
			<Route path = '/my_tasks/week_tasks' render = {() => (
				<OtherCategoriesTasks
					allTasks 			= {allTasks}
					activateCorrectMode = {activateCorrectMode}
					addCorrectedTask 	= {addCorrectedTask}
					filterCB 			= {task => task.deadline - Date.now() + 1000*60*60*3 <= 1000*60*60*24*7  && task.deadline > Date.now() + 1000*60*60*3}
				></OtherCategoriesTasks>
			)}></Route>
		</div>
	)
}