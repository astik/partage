import React from 'react';
import './Spinner.css';

function Spinner() {
	return (
		<div id="loader">
			<div className="dot" />
			<div className="dot" />
			<div className="dot" />
			<div className="dot" />
			<div className="dot" />
			<div className="dot" />
			<div className="dot" />
			<div className="dot" />
			<div className="loading" />
		</div>
	);
}

export default Spinner;
