import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import headerReducer from './reducers/header_reducer.js'
import authReducer from './reducers/auth_reducer.js'
import initAppReducer from './reducers/init_app_reducer.js'
import {reducer as formReducer} from  'redux-form'

let reducers = combineReducers({
	initialize: initAppReducer,
	authorize: authReducer,

	header: headerReducer,

	form: formReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export {store}