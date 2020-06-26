import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'

function mapStateToProps(state) {

	return {
		headerItems: state.header.headerItems
	}
}

export default connect(mapStateToProps, {
	
	//actions

})(Header)

