import React from 'react'
import MyInformation from './MyInformation'
import {connect} from 'react-redux'
import {stateSelectors} from '../../../selectors/selectors.js'

function mapStateToProps(state) {
	return {
		name: stateSelectors.getName(state)
	}
}

export default connect(mapStateToProps, {

	//add actions

})(MyInformation)