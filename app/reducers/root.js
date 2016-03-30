'use strict';

import {combineReducers} from 'redux';
import news from './news';

const rootReducer = combineReducers({
	news
})

export default rootReducer;