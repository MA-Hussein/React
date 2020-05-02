import React from 'react';

const Input = ({ handelSearch }) => {
	return (
		<div className="searchInput">
			<input type="text" onChange={handelSearch} placeholder="Search City..." />
		</div>
	);
};

export default Input;