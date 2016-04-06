'use strict';

import React from 'react-native';
import HomeView from './LifeView';

var {
  AppRegistry,
  StyleSheet,
  BackAndroid,
  Navigator,
  Component
} = React

class CoderCalendar extends Component {
  constructor (props) {
    super(props)
    this.handleBack = this._handleBack.bind(this)
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack)
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBack)
  }

  _handleBack () {
    var navigator = this.navigator

    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop()
      return true
    }
    return false
  }

  render () {
    return (
      <Navigator style = {styles.container}
        ref={component => this.navigator = component}
        initialRoute={{
          component: HomeView
        }}
        renderScene={(route, navigator) => { 
          return <route.component navigator={navigator} {...route} {...route.passProps}/>
        }}/>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
})


AppRegistry.registerComponent('CoderCalendar', () => CoderCalendar);