import React, {Component} from 'react';
import axios from 'axios';
import CountriesList from "../../Components/CountriesList/CountriesList";
import CountryInfo from "../../Components/CountryInfo/CountryInfo";
import './CountryBuilder.css';

class CountryBuilder extends Component {

	state = {
		countries: [],
		country: [],
		borders: '',
		countryInfoShown: false
	};

	componentDidMount() {
		axios.get('https://restcountries.eu/rest/v2/all?fields=name').then(response => {
			const countries = response.data;
			this.setState({countries: countries});
		}).catch(error => {
			console.log(error);
		});
	}

	render() {
		return (
			<div className="country_builder">
				<div className="countries_list">
					{this.state.countries.map(country => (
						<CountriesList
							key={country.name}
							name={country.name}
						/>
					))}
				</div>
				<CountryInfo/>
			</div>
		);
	}
}

export default CountryBuilder;