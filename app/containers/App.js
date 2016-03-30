/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import add from '../actions/news'
import React from 'react-native';
import HomeView from '../view/HomeView'

const {
  StyleSheet,
  Navigator,
  BackAndroid,
  PropTypes
} = React

var _navigator;

class ReactNews extends React.Component{
	constructor(props){
		super(props);
		BackAndroid.addEventListener('hardwareBackPress',function(){
			return NaviGoBack(_navigator);
		});
	}


renderScene(route,navigator){
	let Component=route.component;
    _navigator = navigator;
	return(
		<Component navigator={navigator} route={route}/>
		);
}

configureScene(route){
	return Navigator.SceneConfigs.FadeAndroid;
}

	render(){
		return (
			<Navigator
			ref='navigator'
			style={styles.navigator}
			configureScene={this.configureScene}
			renderScene={this.renderScene}
			initialRoute={{
				component:HomeView,
				name:'HomeView'
			}}
			/>
			);
	}
}


let styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
})


export default ReactNews;