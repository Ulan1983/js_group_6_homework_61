import React from 'react';
import './CountryInfo.css';

const CountryInfo = props => {
	return (
		<div className="country_info">
			<h4>{props.name}</h4>
			<img className="img" src={props.flag} alt=""/>
			<p><b>Capital: </b>{props.capital}</p>
			<p><b>Population: </b>{props.population}</p>
			<p><b>Borders with: </b>{props.borders}</p>
		</div>
	);
};

export default CountryInfo;