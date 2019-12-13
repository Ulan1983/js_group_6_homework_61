import React from 'react';
import './CountriesList.css';

const CountriesList = props => {
	return (
		<div onClick={props.onClick}>
			<p className="p_countries">{props.name}</p>
		</div>
	);
};

export default CountriesList;