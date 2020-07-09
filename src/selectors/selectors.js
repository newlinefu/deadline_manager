import {createSelector} from 'reselect'

export const stateSelectors = {

	getName: function(state) {
		return state.authorize.name
	},

	getCorrectMode: function(state) {
		return state.tasks.correctMode
	},

	isInitialized: function(state) {
		return state.initialize.initialized
	},

	getCountOfUsers: function(state) {
		return state.authorize.countOfUsers
	},

	getArrayOfUsers: function(state) {
		return state.authorize.arrayOfUsers
	},

	getHeaderItems: function(state) {
		return state.header.headerItems
	},

	getTasksCategories: function(state) {
		return state.tasks.tasksCategories
	},

	getAllTasks: function(state) {
		return state.tasks.allTasks
	},

	getCorrectedTask: function(state) {
		return state.tasks.correctedTask
	},

	getAddingNewUser: function(state) {
		return state.authorize.addingNewUser
	}
}

export const tasksSelectors = {

	getCountOfOverdueTasks: createSelector(
		stateSelectors.getAllTasks,
		tasks => {
			if(tasks)
				return tasks.reduce((acc, task) => task.deadline <= Date.now() + 1000*60*60*3 ? acc + 1 : acc, 0)
			else
				return 0
		}
	),

	getCountOfActiveTasks: createSelector(
		stateSelectors.getAllTasks,
		tasks => {
			if(tasks)
				return tasks.reduce((acc, task) => task.deadline > Date.now() + 1000*60*60*3 ? acc + 1 : acc, 0)
			else
				return 0
		}
	),

	getCountOfDayTasks: createSelector(
		stateSelectors.getAllTasks,
		tasks => {
			if(tasks)
				return tasks.reduce((acc, task) => (
					task.deadline - Date.now() + 1000*60*60*3  <= 1000*60*60*24 && task.deadline > Date.now() + 1000*60*60*3
					? acc + 1 
					: acc),
					0)
			else 
				return 0
		}
	),

	getCountOfWeekTasks: createSelector(
		stateSelectors.getAllTasks,
		tasks => {
			if(tasks)
				return tasks.reduce((acc, task) => (
					task.deadline - Date.now() + 1000*60*60*3 <= 1000*60*60*24*7 && task.deadline > Date.now() + 1000*60*60*3
					? acc + 1 
					: acc),
					0)
			else 
				return 0

		}
	)
}