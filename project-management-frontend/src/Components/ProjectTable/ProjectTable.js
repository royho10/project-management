import React from 'react';
import './ProjectTable.css';


let listID = 0;
let taskID = 0;


class ProjectTable extends React.Component {
	constructor() {
		super();
		this.state = {
			newListButton: false,
			newTaskButton: false,
			newListName: '',
			newTaskName: '',
			lists: [],
			tasks: []
		}
	}

	// Open the box where the user can type new list name
	onSubmitOpenAddListButton = () => {
  		this.setState({ newListButton: true })
	}

	// Ditects what the user wrote in the new list name input
	onNewListChange = (event) => {
		this.setState({ newListName: event.target.value })
	}

	// Close the new list box
	xButton = () => {
		this.setState({ newListButton: false })
	}

	// Creates new list and push it to the lists array in the state
	createNewList = () => {
		let listsArr = this.state.lists;
		let newList = {listID: listID, listIndex: this.state.lists.length, listName: this.state.newListName};
		listID += 1;
		listsArr.push(newList);
		this.setState({ lists: listsArr, newListButton: false, newListName: '' })
	}

	// ... toggle
	collapse = (listIndex) => {
		let coll = document.getElementById("list" + listIndex);
	    coll.classList.toggle("active");
	    let content = coll.nextElementSibling;
	    if (content.style.display === "block") {
	      content.style.display = "none";
	    } else {
	      content.style.display = "block";
	    }

	    for (let i = 0; i < this.state.lists.length; i++) {
	    	if (i === listIndex){
	    		
	    	} else {
	    		let otherColl = document.getElementById("list" + i);
	    		if (otherColl.classList.contains("active")) {
		    		otherColl.classList.toggle("active");
				    let content = otherColl.nextElementSibling;
				    if (content.style.display === "block") {
				      content.style.display = "none";
				    } else {
				      content.style.display = "block";
				    }
				}
	    	}
	    }
	}

	// Deletes a specific list while presseing the delete button
	deleteList = (listIndex) => {
		 for (let i = 0; i < this.state.lists.length; i++) {
		 	if (this.state.lists[i].listIndex === listIndex) {
		 		this.state.lists.splice(i, 1);
		 		let newList = this.state.lists;
		 		for (let j = i; j < this.state.lists.length; j++) {
		 			newList[j].listIndex -= 1;
		 		}
		 		this.setState({ lists: newList });
		 		// toggle the active className when deleting
		 		let coll = document.getElementById("list" + listIndex);
			    coll.classList.toggle("active");
			    let content = coll.nextElementSibling;
			    if (content.style.display === "block") {
			      content.style.display = "none";
			    } else {
			      content.style.display = "block";
			    }
		 	}
		 }
	}

	// "add a new task" toggle
	addNewTaskCollapse = (taskIndex) => {
		let coll = document.getElementById("taskAdd" + taskIndex);
	    coll.classList.toggle("active");
	    let content = coll.nextElementSibling;
	    if (content.style.display === "block") {
	      content.style.display = "none";
	    } else {
	      content.style.display = "block";
	    }
	    for (let i = 0; i < this.state.lists.length; i++) {
	    	if (i === taskIndex){
	    		
	    	} else {
	    		let otherColl = document.getElementById("taskAdd" + i);
	    		if (otherColl.classList.contains("active")) {
		    		otherColl.classList.toggle("active");
				    let content = otherColl.nextElementSibling;
				    if (content.style.display === "block") {
				      content.style.display = "none";
				    } else {
				      content.style.display = "block";
				    }
				}
	    	}
	    }
	}

	// Ditects what the user wrote in the new list name input
	onNewTaskChange = (event) => {
		this.setState({ newTaskName: event.target.value })
	}

	// Creates new task and push it to the tasks array in the state
	createNewTask = (listIndex) => {
		let tasksArr = this.state.tasks;
		let newTask = {taskID: taskID, taskIndex: listIndex, taskName: this.state.newTaskName};
		taskID += 1;
		tasksArr.push(newTask);
		this.setState({ tasks: tasksArr, newTaskButton: false, newTaskName: '' })
		this.addNewTaskCollapse(listIndex);
	}


	// ... task toggle
	taskCollapse = (taskIndex) => {
		let coll = document.getElementById("task" + taskIndex);
	    coll.classList.toggle("active");
	    let content = coll.nextElementSibling;
	    if (content.style.display === "block") {
	      content.style.display = "none";
	    } else {
	      content.style.display = "block";
	    }
	    for (let i = 0; i < this.state.tasks.length; i++) {
	    	if (i === taskIndex){
	    		
	    	} else {
	    		let otherColl = document.getElementById("task" + i);
	    		if (otherColl.classList.contains("active")) {
		    		otherColl.classList.toggle("active");
				    let content = otherColl.nextElementSibling;
				    if (content.style.display === "block") {
				      content.style.display = "none";
				    } else {
				      content.style.display = "block";
				    }
				}
	    	}
	    }
	}

	// Deletes a specific list while presseing the delete button
	deleteTask = (taskIndex) => {
		 for (let i = 0; i < this.state.tasks.length; i++) {
		 	if (this.state.tasks[i].taskIndex === taskIndex) {
		 		this.state.tasks.splice(i, 1);
		 		let newTask = this.state.tasks;
		 		for (let j = i; j < this.state.tasks.length; j++) {
		 			newTask[j].taskIndex -= 1;
		 		}
		 		this.setState({ tasks: newTask });
		 		// toggle the active className when deleting
		 		let coll = document.getElementById("task" + taskIndex);
			    coll.classList.toggle("active");
			    let content = coll.nextElementSibling;
			    if (content.style.display === "block") {
			      content.style.display = "none";
			    } else {
			      content.style.display = "block";
			    }
		 	}
		 }
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

	// Showing all the tasks on every list
	eachTaskCreator = (i) => {
		return(
			this.state.tasks.map((task,j) => {
				if (task.taskIndex === i){
					return(
						<div key={j}>				
							<div className="fl w-80" key={j}>
								<p>{task.taskName}</p>
							</div>
							<div id={`task${j}`} className={`bg-animate hover-bg-silver pointer fl w-20 collapsible ${j}`} onClick={() => this.taskCollapse(j)}>
								<p className='f5'>{'...'}</p>
							</div>
							<div className='content'>
								<div className='pointer' onClick={() => this.taskCollapse(j)}>
									<p>{'X'}</p>
								</div>
								<div className='pointer' onClick={() => this.deleteTask(j)}>
									<p>{'delete'}</p>
								</div>
							</div>
						</div>
					);
				} else{
					return(
						<p key={j}></p>
					);
				}
			})		
		);
	}


	render() {
		const { newListButton, lists } = this.state;
		return (
			<div>
				<div className='fl w-80 ba tc'>
					<h1>{'Project Name'}</h1>
					<p>{'users list'}</p>
					{ lists.map(this.eachListCreator) }
					{	newListButton === false
				 		? <button id="openAddListButton" className='fl w-20 ba dim ma2' onClick={this.onSubmitOpenAddListButton}>{'+ Add another list'}</button>
				 		: 
				 			( <div id='addNewListBox' className='list fl w-20 ma2'>
				 				<input className='fl w-100 pa2' placeholder='Enter list title...' type='text' id='newListInput' onChange={this.onNewListChange} autoFocus />
				 				<button id="submitAddListButton" className='fl w-40 pa2 ma2 bg-green dim' onClick={this.createNewList}>{'Add List'}</button>
				 				<p className='f3 fl w-10 pa2 ma2 pointer dim' onClick={this.xButton}>{'X'}</p>
				 			</div> )
					}	
				</div>	
			</div>
		);
	}
}


export default ProjectTable;