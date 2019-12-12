import React, {Component} from 'react';
import CountriesList from "../../Components/CountriesList/CountriesList";
import CountryInfo from "../../Components/CountryInfo/CountryInfo";

class CountryBuilder extends Component {
	render() {
		return (
			<div className="country_builder">
				<CountriesList/>
				<CountryInfo/>
			</div>
		);
	}
}

export default CountryBuilder;