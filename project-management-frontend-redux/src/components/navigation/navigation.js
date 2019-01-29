import React from 'react';
import './navigation.css';


const Navigation = () => {
	return (
		<nav>
			<div id="createNew" className='fl w-10 ba tc dim pointer'>
				<p>{'+'}</p>
			</div>
			<div id="logo" className='fl w-60 ba tc'>
				<p>{'LOGO'}</p>
			</div>
			<div id="notifications" className='fl w-10 ba tc dim pointer'>
				<p>{'notifications'}</p>
			</div>
			<div id="greet" className='fl w-20 ba tc'>
				<p>{'Hello User'}</p>
			</div>
		</nav>
	);	
}

export default Navigation;