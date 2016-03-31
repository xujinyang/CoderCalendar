'use strict'
import React from 'react-native'
import coderUtils from '../utils/coderUtils'
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
              {coderUtils.getTodayString()}
        </Text>

        <View style={styles.yi}>
          <View style={[styles.tag,{backgroundColor:'#ffee44'}]}>
            <Text style={styles.tag_text}>
             宜
            </Text>
          </View>
          <View style={[styles.tagContent,{backgroundColor:'#ffffaa'}]}>
             <Text style={styles.tip}>
             写单元测试
            </Text>
             <Text style={styles.tip_text}>
             写单元测试将减少出错
            </Text>
             <Text style={styles.tip}>
             抽烟
            </Text>
             <Text style={styles.tip_text}>
            抽烟有利于提神，增加思维敏捷
            </Text>
             <Text style={styles.tip}>
             白天上线
            </Text>
             <Text style={styles.tip_text}>
             今天白天上线是安全的
            </Text>
          </View>
        </View>

         <View style={styles.yi}>
          <View style={[styles.tag,{backgroundColor:'#ff4444'}]}>
            <Text style={[styles.tag_text,{color:'#FFFFFF'}]}>
             不宜
            </Text>
          </View>
          <View style={[styles.tagContent,{backgroundColor:'#ffddd3'}]}>
             <Text style={styles.tip}>
             跳槽
            </Text>
             <Text style={styles.tip_text}>
             鉴于当前的经济形势，你的下一份工作未必比现在强
            </Text>
             <Text style={styles.tip}>
             撸管
            </Text>
             <Text style={styles.tip_text}>
            强撸灰飞烟灭
            </Text>
             <Text style={styles.tip}>
             开会
            </Text>
             <Text style={styles.tip_text}>
             小心被扣屎盆子背黑锅
            </Text>
          </View>
        </View>

         <Text style={styles.special_point}>
             座位朝向：面向北方写程序，BUG 最少。
         </Text>
        <Text style={styles.special_point}>
             今日宜饮：水，奶茶
         </Text>
          <Text style={styles.special_point}>
            女神亲近指数：★★★★★
         </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  yi: {
    flexDirection: 'row',
    flex:1,
  },
  tag:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  tagContent:{
    flex:2,
    flexDirection: 'column',
    padding:15
  },
  tag_text:{
    fontSize:40,
    color:'#000000'
  },
  tip:{
    fontSize:22,
    color:'#000000'
  },
  tip_text:{
    fontSize:18,
    color:'#7a7e7c'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
  },
  storyTitle: {
    fontSize: 25,
    color: '#333333',
    margin:15,
    alignItems:'center',
    justifyContent:'center'
  },
  special_point:{
     fontSize:18,
    color:'#7a7e7c',
    marginLeft:15,
    marginRight:15
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