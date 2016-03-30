'use strict';
import * as types from '../constants/ActionTypes';

export function addCount() {
	return {
		type: types.ADD,
		count:1000
	}
}