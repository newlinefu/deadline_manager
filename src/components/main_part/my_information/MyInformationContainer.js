import React from 'react'
import MyInformation from './MyInformation'
import {connect} from 'react-redux'
import {stateSelectors} from '../../../selectors/selectors.js'
import {clearAuth, deleteUser, setAddingNewUserMode, setAuthorizateInStateAC} from '../../../redux/reducers/auth_reducer.js'

function mapStateToProps(state) {
	return {
		name: stateSelectors.getName(state),

	}
}

export default connect(mapStateToProps, {

	clearAuth,
	deleteUser,
	setAddingNewUserMode,
	setAuthorizateInStateAC

})(MyInformation)