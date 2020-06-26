const defaultState = {
	headerItems: [
		{
			name: 'Моя информация',
			link: '/my_information'
		},
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