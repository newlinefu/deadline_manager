const defaultState = {
	headerItems: [
		{
			name: 'Мои задачи',
			link: '/my_tasks'
		},
		{
			name: 'О приложении',
			link: '/about_application'
		},
	]
}

export default function headerReducer(state = defaultState, action) {
	return state
}