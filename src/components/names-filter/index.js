import { h, Component } from 'preact';
// import style from './style.scss';
// import cx from 'classnames';
import LocationSelector from '../location-selector';

const locations = [
	{
		id: 'us',
		display: 'USA'
	},
	{
		id: 'au-sa',
		display: 'South Australia'
	}
];

export default class NamesFilter extends Component {
	handleLocation(e) {
		localStorage.selectedLocation = e.target.dataset.location;
		this.setState({
			selectedLocation: localStorage.selectedLocation
		});
		this.updateCount();
	}

	updateCount() {
		fetch(`http://localhost:3000/v1/${this.state.selectedLocation}/count/`)
			.then(res => res.json())
			.then(res => {
				this.setState({
					count: res.count
				});
			});
	}

	state = {
		selectedLocation: localStorage.selectedLocation || locations[0].id,
		count: false
	};

	constructor() {
		super();
		this.handleLocation = this.handleLocation.bind(this);
	}

	componentDidMount() {
		this.updateCount();
	}

	render(props, { selectedLocation, count }) {
		return (
			<div>
				<LocationSelector
					locations={locations}
					selectedLocation={selectedLocation}
					handleLocation={this.handleLocation}
				/>
				<input type="range" />
				{count !== false ? <p>Total possible names {count}</p> : null}
			</div>
		);
	}
}
