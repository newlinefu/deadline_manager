export const stateSelectors = {

	getName: function(state) {
		return state.authorize.name
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
	}
}