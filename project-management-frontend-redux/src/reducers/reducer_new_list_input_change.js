import { INPUT_NEW_LIST_NAME_CHANGE } from '../constants';

const INITIAL_STATE = { newListNameInput: "" };

export default function (state = INITIAL_STATE, action) {
	return { newListNameInput: action.payload };
}