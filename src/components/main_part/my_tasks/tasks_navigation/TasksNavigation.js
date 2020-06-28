import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './tasks_navigation.module.css'

export default function TasksNavigation({tasksCategories}) {
	return (
		<div className={styles.tasks_navigation_wrapper}>
			{
				tasksCategories.map(category => (
					<NavLink 
						to={category.link}
						className = {styles.category_link}>
							{category.title}

					</NavLink>
				))
			}
		</div>
	)
}