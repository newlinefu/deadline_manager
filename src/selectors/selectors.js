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
	}
}