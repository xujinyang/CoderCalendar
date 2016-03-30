'use strict'

import React from 'react-native'
import {createStore,applyMiddleware} from 'redux'
import logger from './middleware/logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'


import rootReducer from './reducers/root'
import App from './containers/App'

const createStoreWithMW=applyMiddleware(logger,thunk)(createStore)
const store=createStoreWithMW(rootReducer)

export default class Root extends React.Component{
	render(){
		return (
			<Provider store={store}>
				<App />
			</Provider>
			)
	}
}