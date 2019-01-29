import { ADD_ANOTHER_LIST_CLICKED, INPUT_NEW_LIST_NAME_CHANGE } from '../constants';

export const getInputListName = (event) => {
	console.log(event.target.value);
	return {
		type: INPUT_NEW_LIST_NAME_CHANGE,
		payload: event.target.value
	}
};

export const createNewList = (listName) => {
	console.log(listName);
	return {
		type: ADD_ANOTHER_LIST_CLICKED,
		payload: listName
	}
};

