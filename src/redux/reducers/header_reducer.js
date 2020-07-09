const defaultState = {
	headerItems: [
		{
			name: 'Мои задачи',
			link: '/my_tasks'
		}
	]
}

export default function headerReducer(state = defaultState, action) {
	return state
}