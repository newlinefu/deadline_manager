const defaultLocalStorageObject = {
	name: 	null,
	status: null,
	tasks: 	[]
}

export const request = {

	getListLenghtCreatedUsersFromLocalStorage: function() {
		return new Promise((resolve, reject) => {
			setTimeout(
				() => resolve(localStorage.length),
				1500
			)
		})
	},

	putUserToLocalStorage: function(name) {
		return new Promise((resolve, reject) => {
			setTimeout(
				() => {
					const addingUserObject 	= JSON.stringify({...defaultLocalStorageObject, name: String(name)})
					const existedUser 		= localStorage.getItem(String(name))
					if(!existedUser) {

						localStorage.setItem(String(name), addingUserObject)
						resolve(true)

					} else {

						resolve(false)

					}
				},
				1500
			)
		})
	},

	getArrayOfAllUsersFromLocalStorage: function() {
		return new Promise( (resolve, reject) => {
			setTimeout(
				() => resolve(getArrayOfAllUsers()),
				1500
			)
		})
	},

	addNewTaskToLocalStorage: function(name, title, description, dateOfCreation, dateOfLastChange, deadline) {
		return new Promise( (resolve, reject) => {
			setTimeout(
				() => {
					const localStorageObject = JSON.parse(localStorage.getItem(name))
					if(!localStorageObject.tasks.filter(task => task.title === title).length) {

						localStorageObject.tasks.push({
							title, 
							description, 
							dateOfCreation, 
							dateOfLastChange,
							deadline
						})
						localStorage.setItem(name, JSON.stringify(localStorageObject))
						resolve(true)		

					} else {

						resolve(false)

					}

				},
				1500
			)
		})
	},

	getAllTasksFromLocalStorage: function(name) {
		return new Promise( (resolve, reject) => {
			setTimeout(
				() => {
					const localStorageObject = JSON.parse(localStorage.getItem(name))
					resolve(localStorageObject.tasks)
				},
				1500
			)
		})
	},

	changeTaskInLocalStorage: function(name, title, description, dateOfLastChange, deadline) {
		return new Promise( (resolve, reject) => {
			setTimeout(
				() => {
					const localStorageObject = JSON.parse(localStorage.getItem(name))
					localStorageObject.tasks = localStorageObject.tasks.map( task => {
						if(task.title === title)
							return {
								title, 
								description, 
								dateOfCreation: task.dateOfCreation, 
								dateOfLastChange, 
								deadline
							}
						return task
					})
					localStorage.setItem(name, JSON.stringify(localStorageObject))
					resolve(true)					
				},
				1500
			)
		})
	},

	deleteTaskFromLocalStorage: function(name, title) {
		return new Promise( (resolve, reject) => {
			setTimeout(
				() => {
					const localStorageObject = JSON.parse(localStorage.getItem(name))
					localStorageObject.tasks = localStorageObject.tasks.filter( task => task.title != title)
					localStorage.setItem(name, JSON.stringify(localStorageObject))
					resolve(true)
				},
				1500
			)
		})
	},

	deleteUserFromLocalStorage: function(name) {
		return new Promise( (resolve, reject) => {
			setTimeout(
				() => {
					localStorage.removeItem(name)
					resolve(true)
				},
				1500
			)
		})
	}
}

function getArrayOfAllUsers() {
	const arrayOfAllUsers = []

	for(let i = 0; i < localStorage.length; i++) {
		arrayOfAllUsers.push(localStorage.key(i))
	}

	return arrayOfAllUsers
}
