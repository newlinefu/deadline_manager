import React 			from 'react'
import {connect} 		from 'react-redux'
import Header 			from './Header'
import {stateSelectors} from '../../selectors/selectors.js'
import {
	clearAuth, 
	deleteUser, 
	setAddingNewUserMode, 
	setAuthorizateInStateAC
} 						from '../../redux/reducers/auth_reducer.js'

function mapStateToProps(state) {
	return {
		headerItems: 	stateSelectors.getHeaderItems(state),
		name: 			stateSelectors.getName(state)
	}
}

export default connect(mapStateToProps, {
	
	clearAuth,
	deleteUser,
	setAddingNewUserMode

})(Header)

