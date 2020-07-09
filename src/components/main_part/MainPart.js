import React 			from 'react'
import {Route} 			from 'react-router-dom'
import MyTasksContainer from './my_tasks/MyTasksContainer'
import styles 			from './main_part.module.css'

function MainPart() {
	return (
		<div className = {styles.main_part_wrapper}>
			<Route 
				path 	= '/my_tasks' 
				render 	= {() => <MyTasksContainer></MyTasksContainer>}
			></Route>
		</div>
	)
}

export default MainPart