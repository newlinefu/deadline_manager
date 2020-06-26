import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {stateSelectors} from '../../selectors/selectors.js'

function mapStateToProps(state) {
	return {
		headerItems: stateSelectors.getHeaderItems(state)
	}
}

export default connect(mapStateToProps, {
	
	//actions

})(Header)

