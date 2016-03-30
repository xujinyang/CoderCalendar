'use strict'
import React from 'react-native'
var {
  Component,
  StyleSheet,
  Text,
  View
} = React

class HomeView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.storyTitle}>
            今天是2016年3月29日 星期二
        </Text>
        <View style={styles.height50,styles.row}>
            <View style={styles.height160,styles.part_1_left,{backgroundColor:'#55A44B'}}>
               <Text style={styles.storyTitle}>
              宜
              </Text>
            </View>
            <View style={styles.height160,styles.part_1_right,{backgroundColor:'#FF3F0D'}}>
              <Text style={styles.storyTitle}>
            写单元测试œ
            </Text>
            </View>
          </View>
           <View style={styles.height50,styles.row}>
            <View style={styles.height160,styles.part_1_left}>
               <Text style={styles.storyTitle}>
              不宜
              </Text>
            </View>
            <View style={styles.height160,styles.part_1_right}>
              <Text style={styles.storyTitle}>
            发版本
            </Text>
            </View>
          </View>
        </View>
    )
  }
}

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  height50: {
    height: 50
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
  },
  storyTitle: {
    fontSize: 30,
    color: '#333333',
  },
  marTop18: {
    marginTop: 18,
  },
  marTop14: {
    marginTop: 14,
  },
  font14: {
    fontSize: 14,
  },
  font10: {
    fontSize: 12,
  },
  height160: {
    height: 160
  },
  yue: {
    height: 80,
  },
  green: {
    color: '#55A44B',
    fontWeight: '900'
  },
  red: {
    color: '#FF3F0D',
    fontWeight: '900'
  },
  marLeft10: {
    marginLeft: 10,
  },
  part_1_left: {
    flex: 1,
    borderColor: '#DCD7CD',
    borderRightWidth: 0.5,
    borderBottomWidth: 1,
  },
  part_1_right: {
    flex: 2,
    borderColor: '#DCD7CD',
    borderBottomWidth: 1,
  }

});

module.exports = HomeView