const defaultLocalStorageObject = {
	name: null,
	status: null,
	tasks: []
}

export const request = {
	getListLenghtCreatedUsersFromLocalStorage: function() {
		return new Promise((resolve, reject) => {
			setTimeout(
				() => {
					resolve(localStorage.length)
				},
				400
			)
		})
	},

	putUserToLocalStorage: function(name) {
		return new Promise((resolve, reject) => {
			setTimeout(
				() => {
					const addingUserObject = JSON.stringify({...defaultLocalStorageObject, name: String(name)})
					localStorage.setItem(String(name), addingUserObject)
					resolve(true)
				},
				400
			)
		})
	},

	getArrayOfAllUsersFromLocalStorage: function() {
		return new Promise( (resolve, reject) => {
			setTimeout(
				() => {
					resolve(getArrayOfAllUsers())
				},
				400
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