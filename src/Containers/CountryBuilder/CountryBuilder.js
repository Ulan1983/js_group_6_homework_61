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

	getCountryInfo = name => {
		axios.get('https://restcountries.eu/rest/v2/name/' + name).then(response => {
			const promises = response.data[0].borders.map(code => {
				return axios.get('https://restcountries.eu/rest/v2/alpha/' + code);
			});
			Promise.all(promises).then(response => {
				const borderCountries = response.map(country => {
					return country.data.name;
				});
				if (borderCountries.length <= 0) {
					this.setState({borders: 'This country does not have any borders with another countries'});
				} else {
					this.setState({borders: borderCountries.join(', ')})
				}
			});
			this.setState({country: response.data, countryInfoShown: true});
		})
	};

	render() {
		return (
			<div className="country_builder">
				<div className="countries_list">
					{this.state.countries.map(country => (
						<CountriesList
							key={country.name}
							name={country.name}
							onClick={() => this.getCountryInfo(country.name)}
						/>
					))}
				</div>
				{this.state.country.map(country => (
					<CountryInfo
						key={country.name}
						name={country.name}
						flag={country.flag}
						capital={country.capital}
						population={country.population}
						borders={this.state.borders}
					/>
				))}
			</div>
		);
	}
}

export default CountryBuilder;