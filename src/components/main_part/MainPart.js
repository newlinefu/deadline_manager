import React from 'react'
import {Route} from 'react-router-dom'
import MyInformationContainer from './my_information/MyInformationContainer'
import styles from './main_part.module.css'

function MainPart() {
	return (
		<div className={styles.main_part_wrapper}>
			<Route path='/my_information' render={() => <MyInformationContainer></MyInformationContainer>}></Route>
			<Route path='/my_tasks' render={() => <div></div>}></Route>
			<Route path='/about_application' render={() => <div></div>}></Route>
		</div>
	)
}

export default MainPart