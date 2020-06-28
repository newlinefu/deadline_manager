import {request} from '../../local_storage_api/local_storage_api.js'

const ADD_TASK = 'ADD_TASK'
const ADD_ALL_TASKS = 'ADD_ALL_TASKS'
const ACTIVATE_CORRECT_MODE = 'ACTIVATE_CORRECT_MODE'
const DEACTIVATE_CORRECT_MODE = 'DEACTIVATE_CORRECT_MODE'

const defaultState = {
	allTasks: [],
	correctMode: true,
	tasksCategories: [
		{
			title: 'Все задачи',
			link: '/my_tasks/all_tasks'
		},
		{
			title: 'Активные задачи',
			link: '/my_tasks/active_tasks'
		},
		{
			title: 'Просроченные задачи',
			link: '/my_tasks/overdue_tasks'
		}
	]
}

export default function myTasksReducer(state = defaultState, action) {
	switch (action.type) {
		case(ADD_TASK): {
			return {
				...state,
				allTasks: [...state.allTasks, {
					title: action.title,
					description: action.description,
					dateOfCreation: action.dateOfCreation,
					dateOfLastChange: action.dateOfLastChange,
					deadline: Date.parse(action.deadline)
				}]
			}
		}
		case(ACTIVATE_CORRECT_MODE): {
			return {
				...state,
				correctMode: true
			}
		}
		case(DEACTIVATE_CORRECT_MODE): {
			return {
				...state,
				correctMode: false
			}
		}
		case(ADD_ALL_TASKS): {
			return {
				...state,
				allTasks: action.allTasks
			}
		}
		default:
			return state
	}
}

function addTaskAC(title, description, dateOfCreation, dateOfLastChange, deadline) {
	return {
		type: ADD_TASK,
		title,
		description,
		dateOfCreation,
		dateOfLastChange,
		deadline
	}
}

function addAllTasksFromLS(allTasks) {
	return {
		type: ADD_ALL_TASKS,
		allTasks
	}
}

export function activateCorrectMode() {
	return {
		type: ACTIVATE_CORRECT_MODE
	}
}
export function deactivateCorrectMode() {
	return {
		type: DEACTIVATE_CORRECT_MODE
	}
}

export function addTaskToLSAndState(title, description, deadline) {
	return async (dispatch, getState) => {

		const dateOfCreation = Date.now()
		const name = getState().authorize.name

		const response = await request.addNewTaskToLocalStorage(
			name,
			title,
			description,
			dateOfCreation,
			dateOfCreation,
			Date.parse(deadline)
		)
		if(response){
			dispatch(addTaskAC(title, description, dateOfCreation, dateOfCreation, deadline))
			dispatch(deactivateCorrectMode())
		}
	}
}

export function addAllTasksToState() {
	return async (dispatch, getState) => {
		const name = getState().authorize.name
		const response = await request.getAllTasksFromLocalStorage(name)
		if(response) {
			dispatch(addAllTasksFromLS(response))
		}
	}
}