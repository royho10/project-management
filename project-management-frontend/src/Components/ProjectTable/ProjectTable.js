import React from 'react';
import './ProjectTable.css';



const ProjectTable = ({ submitAddListButton }) => {
	return (
		<div className='fl w-80 ba tc'>
			<h1>{'Project Name'}</h1>
			<p>{'users list'}</p>
			<button id="addingList" className='fl w-20 ba dim' onClick={submitAddListButton}>{'+ Add another list'}</button>
		</div>
	)
}

export default ProjectTable;