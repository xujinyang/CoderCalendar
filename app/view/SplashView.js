'use strict'

import React from 'react-native';

const {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  InteractionManager,
}=React;

import Animated from 'Animated';
import News from '../containers/news'
import HomeView from './HomeView'

var WINDOW_WIDTH = Dimensions.get('window').width;

class SplashView extends React.Component {
	
	constructor(props) {
		super(props);

		this.state={
			bounceValue: new Animated.Value(1)
		};
		this.nextView=this.nextView.bind(this);
	}
 
	componentDidMount() {
	 setTimeout(
      () => {
        this.nextView();
      },
      2000,
    );
	    Animated.timing(
	      this.state.bounceValue,
	      {
	        toValue: 1.2,
	        duration: 2000,
	      }
	    ).start();
	  }

	  nextView() {
		const {navigator} = this.props;
		InteractionManager.runAfterInteractions(() => {
			navigator.push({
				component: HomeView,
				name: 'HomeView'
			})
		})
	}

	render() {
		return (
			<View style={styles.container}>
		        <Animated.Image
		          source={{uri:'http:\/\/pic1.zhimg.com\/cd9b37142f3353ee7dda498e00335230.jpg'}}
		          style={{
		            flex: 1,
		            width: WINDOW_WIDTH,
		            height: 1,
		            transform: [
		              {scale: this.state.bounceValue},
		            ]
		          }} />
		        <Text style={styles.text}>
		            React新闻
		        </Text>
	       		</View>
		);
	}
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  cover: {
    flex: 1,
    width: 200,
    height: 1,
  },
  logo: {
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
    height: 54,
    backgroundColor: 'transparent',
  },
  text: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    backgroundColor: 'transparent',
  }
});

export default SplashView;
