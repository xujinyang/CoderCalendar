'use strict'
import * as types from '../constants/ActionTypes'

const initialState={
	count:0
}

export default function news(state=initialState,action){
	switch(action.type){
		case types.ADD:
		return Object.assign({}, state, {
        count: 1
      });
		default:
		return state;
	}
}