/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	TouchableHighlight,
	ToastAndroid,
	PropTypes,
	Text,
	View
}
from 'react-native';

class ReactNews extends React.Component {
	constructor(props) {
		super(props);
	
	}


	render() {
		const {
				news
			
		} = this.props;
		return (
			
        <TouchableHighlight  underlayColor='transparent'>
        <Text style={styles.instructions}>
         测试
        </Text>
         </TouchableHighlight>
     
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

export default ReactNews;