import React 		from 'react'
import {NavLink} 	from 'react-router-dom'
import styles 		from './tasks_navigation.module.css'

export default function TasksNavigation({
	countOfOverdueTasks, countOfActiveTasks, countOfDayTasks, getCountOfWeekTasks
}) {
	return (
		<div className={styles.tasks_navigation_wrapper}>
			<NavLink 
				to 			= '/my_tasks/all_tasks'
				className 	= {styles.category_link}>
					Все задачи {countOfOverdueTasks + countOfActiveTasks}
			</NavLink>
			<NavLink 
				to 			= '/my_tasks/active_tasks'
				className 	= {styles.category_link}>
					Активные задачи {countOfActiveTasks}
			</NavLink>
			<NavLink 
				to 			= '/my_tasks/overdue_tasks'
				className 	= {styles.category_link}>
					Просроченные задачи {countOfOverdueTasks}
			</NavLink>
			<NavLink 
				to 			= '/my_tasks/day_tasks'
				className 	= {styles.category_link}>
					Задачи на ближайшие сутки {countOfDayTasks}
			</NavLink>
			<NavLink 
				to 			= '/my_tasks/week_tasks'
				className 	= {styles.category_link}>
					Задачи на ближайшие 7 суток {getCountOfWeekTasks}
			</NavLink>
		</div>
	)
}