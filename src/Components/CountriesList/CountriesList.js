import React from 'react';
import './CountriesList.css';

const CountriesList = props => {
	return (
		<div>
			<li className="li_countries">{props.name}</li>
		</div>
	);
};

export default CountriesList;