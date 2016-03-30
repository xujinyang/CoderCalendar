'use strict';

import React from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SplashView from '../view/SplashView';

class SplashContainer extends React.Component{
	render() {
		return (
			<SplashView {...this.props} />
		)
	}
}

function mapStateToProps(state){
	return {
		news :state.news
	}
}

export default connect(mapStateToProps)(SplashContainer);