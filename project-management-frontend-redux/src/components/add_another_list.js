import React, { Component } from "react";
import {createNewList, getInputListName} from "../actions/index";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


class AddAnotherList extends Component {


	// Open the box where the user can type new list name
	onSubmitOpenAddListButton = () => {
  		this.setState({ newListButton: true })
	}

	// Close the new list box
	xButton = () => {
		this.setState({ newListButton: false })
	}

	render() {
		const { newListButton } = this.state;
		return (
			<div>
				{	newListButton === false
			 		? <button id="openAddListButton" className='fl w-20 ba dim ma2' onClick={this.onSubmitOpenAddListButton}>{'+ Add another list'}</button>
			 		: 
			 			( <div id='addNewListBox' className='list fl w-20 ma2'>
			 				<input className='fl w-100 pa2' placeholder='Enter list title...' type='text' id='newListInput' onChange={this.props.getInputListName} autoFocus />
			 				<button id="submitAddListButton" className='fl w-40 pa2 ma2 bg-green dim' onClick={this.props.createNewList}>{'Add List'}</button>
			 				<p className='f3 fl w-10 pa2 ma2 pointer dim' onClick={this.xButton}>{'X'}</p>
			 			</div> )
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		newListNameInput: state.newListNameInput
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ createNewList: createNewList, getInputListName: getInputListName }, dispatch);
} 

export default connect(mapStateToProps, matchDispatchToProps)(AddAnotherList);