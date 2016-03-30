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
	PropTypes,
	Text,
	ListView,
	ToolbarAndroid,
	RefreshControl,
	BackAndroid,
	Image,
	TouchableOpacity,
	View
}
from 'react-native';

class MainView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
				isLoading:false
			})
		};

		this.onRefresh = this.onRefresh.bind(this);
		this.renderItem = this.renderItem.bind(this);
	}


	componentDidMount() {
			this.onRefresh();
	}

	onRefresh() {
		var body = JSON.stringify({});
	fetch('http://apis.baidu.com/songshuxiansheng/news/news', {
		  method: 'GET',
		  headers: {
		  	'Accept': 'application/json',
		  	'Content-Type':'application/json',
		    'apikey':'bc189155637b8de75866d9645916f76b'
		  }
		})
		.then((response) =>{
          return response.json();
        }).then((responseData) =>{
        	
				console.log(responseData.retData);
        	this.setState({
        		dataSource: this.state.dataSource.cloneWithRows(responseData.retData),
        		isLoading:false
        	})
        })
        .catch((error) =>{
        	console.log(error);
        })
	}

	renderItem(item) {

			return (

				<View style={styles.listViewItem}>
				<Image 
				style={styles.cellImage}
				source={{uri:item.image_url}}
				/>
				<Text style={styles.storyTitle}>
				{item.title}
				</Text>
				</View>


			);
	}

	render() {
		
		return (	
        <View style={styles.container}>
          <ToolbarAndroid
            navIcon={require('../img/ic_back_white.png')}
            title='新闻'
            titleColor="white"
            style={styles.toolbar}
            />
        <ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderItem}
				style={styles.listView}
				refreshControl={
					<RefreshControl
						refreshing={this.isLoading}
						onRefresh={this.onRefresh}
						title="Loading..."
						colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
					/>
				}
			/>
        </View>
     
		);
	}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
  },
  toolbar: {
    backgroundColor: '#00a2ed',
    height: 56,
  },
  listView: {
		backgroundColor: '#eeeeec'
	},
	listViewItem: {
		flex: 1,
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: '#ddd',
		borderBottomWidth: 1
	},
	cellImage: {
    backgroundColor: '#dddddd',
    height: 60,
    marginLeft: 10,
    width: 80,
  },
    storyTitle: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  no_data: {
		flex: 1,
		justifyContent: 'center',
		paddingBottom: 50
	}

});

export default MainView;