import React from 'react'
import {connect} from 'react-redux'
import MyTasks from './MyTasks'
import {stateSelectors} from '../../../selectors/selectors.js'
import {addTaskToLSAndState, 
	activateCorrectMode, 
	deactivateCorrectMode,
	changeTaskInStateAndLS,
	addCorrectedTaskAC,
	deleteTaskInLSAndState
} from '../../../redux/reducers/my_tasks_reducer.js'

function mapStateToProps(state) {
	return {
		name: stateSelectors.getName(state),
		correctMode: stateSelectors.getCorrectMode(state),
		tasksCategories: stateSelectors.getTasksCategories(state),
		allTasks: stateSelectors.getAllTasks(state),
		correctedTask: stateSelectors.getCorrectedTask(state)
	}
}

export default connect(mapStateToProps, {

	addTaskToLSAndState,
	activateCorrectMode,
	deactivateCorrectMode,
	changeTaskInStateAndLS,
	addCorrectedTask: addCorrectedTaskAC,
	deleteTaskInLSAndState

})(MyTasks)

