import React, { Component } from 'react';
import './project_table.css';
import AddAnotherList from '../add_another_list';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

let listID = 0;

class ProjectTable extends Component {


	// Ditects what the user wrote in the new list name input
	onNewListNameChange = (event) => {
		this.setState({ newListName: event.target.value })
	}

	

	// Creates new list and push it to the lists array in the state
	createNewList = () => {
		let listsArr = this.props.lists;
		let newList = {listID: listID, listIndex: this.props.lists.length, listName: this.state.newListName};
		listID += 1;
		listsArr.push(newList);
		this.setState({ lists: listsArr, newListButton: false, newListName: '' });
	}

	
	// Showing all the list cards on the screen
	eachListCreator = (text, i) => {
		return (
			<div className='list fl w-20 ma2 bg-moon-gray' key={i}>
				<p className='f5 fl w-80'>{text.listName}</p>
				<div id={`list${i}`} className={`bg-animate hover-bg-silver pointer fl w-20 collapsible ${i}`} onClick={() => this.collapse(i)}>
					<p className='f5'>{'...'}</p>
				</div>
				<div className='content'>
					<div className='pointer' onClick={() => this.collapse(i)}>
						<p>{'X'}</p>
					</div>
					<div className='pointer' onClick={() => this.deleteList(i)}>
						<p>{'delete'}</p>
					</div>
				</div>
				{ this.eachTaskCreator(i) }
				<div id={`taskAdd${i}`} className='fl w-100 bg-animate hover-bg-silver pointer' onClick={() => this.addNewTaskCollapse(i)}>
					<p className='f5'>{'+ Add a task'}</p>
				</div>
				<div className='content bg-moon-gray'>
					<textarea autoFocus placeholder="Enter a title for this task..." className='mt2' rows="2" cols="27" onChange={this.onNewTaskChange}></textarea>
					<button id="submitAddListButton" className='fl w-40 pa2 ma2 bg-green dim' onClick={() => this.createNewTask(i)}>{'Add task'}</button>
					<div className='pointer fl w-20 f4 dim' onClick={() => this.addNewTaskCollapse(i)}>
						<p>{'X'}</p>
					</div>
				</div>
			</div>
		);
	}


	render() {
		return (
			<div>
				<div className='fl w-80 ba tc'>
					<h1>{'Project Name'}</h1>
					{console.log(this.props.lists)}
					<p>{'users list'}</p>
					{ this.props.lists.map(this.eachListCreator) }
					<AddAnotherList onNewListNameChange={this.onNewListNameChange} createNewList={this.createNewList} />	
				</div>	
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		lists: state.lists
	};
}

export default connect(mapStateToProps)(ProjectTable);