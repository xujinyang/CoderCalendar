'use strict'
import React from 'react-native'
import coderUtils from './coderUtils'
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
    var totalObject=coderUtils.getTotalObject();
    console.log(totalObject)
    return (
      <View style={styles.container}>
        <Text style={styles.storyTitle}>
              {totalObject.today}
        </Text>
        <View style={styles.yi}>
          <View style={[styles.tag,{backgroundColor:'#ffee44'}]}>
            <Text style={styles.tag_text}>
             宜
            </Text>
          </View>
          <View style={[styles.tagContent,{backgroundColor:'#ffffaa'}]}>
             {this._getItemView(totalObject.goodList)}
          </View>
        </View>

         <View style={styles.yi}>
          <View style={[styles.tag,{backgroundColor:'#ff4444'}]}>
            <Text style={[styles.tag_text,{color:'#FFFFFF'}]}>
             不宜
            </Text>
          </View>
          <View style={[styles.tagContent,{backgroundColor:'#ffddd3'}]}>
            {this._getItemView(totalObject.badList)}
          </View>
        </View>

         <Text style={styles.special_point}>
             座位朝向：面向{totalObject.direction}写程序，BUG 最少。
         </Text>
        <Text style={styles.special_point}>
             今日宜饮：{totalObject.drinks}
         </Text>
          <Text style={styles.special_point}>
            女神亲近指数：{totalObject.stars}
         </Text>
      </View>
    )
  }
  
_getItemView(contentList){
  return contentList.map((item,index) =>(
    <View style={{flex:1,flexDirection: 'column'}}>
       <Text style={styles.tip}>
        {item.name}
        </Text>
       <Text style={styles.tip_text}>
        {item.good}
       </Text>
    </View>
    ))
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
    flex:2.5,
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
    paddingBottom:8
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
  }
});

module.exports = HomeView