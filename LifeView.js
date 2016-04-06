'use strict'
import React from 'react-native'
var GridView = require('react-native-grid-view');

var {
  Component,
  StyleSheet,
  Text,
  View
} = React

class LifeView extends Component {
  constructor(props) {
    super(props)
    this.state={
      list:[
       {
        date:1
       },
        {
        date:2
       },
        {
        date:3
       },
        {
        date:4
       },
        {
        date:5
       },
        {
        date:6
       },
        {
        date:7
       } ,
        {
        date:8
       } ,
        {
        date:9
       } ,
        {
        date:10
       } ,
        {
        date:11
       } ,
        {
        date:12
       } ,
        {
        date:13
       } ,
        {
        date:14
       } 
      ]
    }
  }

  render() {
    return (
       <GridView
        items={this.state.list}
        itemsPerRow={12}
        renderItem={this.renderItem}
      />
    )
  }

  renderItem(item) {
    return <View style={styles.container}>
      <Text>
      {item.date}
      </Text>
    </View>
  }
}
  

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',

  }
});

module.exports = LifeView