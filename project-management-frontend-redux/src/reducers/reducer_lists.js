import { ADD_ANOTHER_LIST_CLICKED } from '../constants';

const INITIAL_STATE = { list: null, lists: [] };

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case ADD_ANOTHER_LIST_CLICKED:
			return { ...INITIAL_STATE.lists, list: action.payload }
	}
	return state;
}