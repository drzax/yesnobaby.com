import style from './style.scss';

export default ({ handleLocation, locations, selectedLocation }) => (
	<div className={style['location-selector']}>
		<label>Select preferred baby name data set</label>
		<div>
			{locations.map(location => (
				<button
					className={selectedLocation === location.id ? style.selected : null}
					data-location={location.id}
					onClick={handleLocation}
				>
					{location.display}
				</button>
			))}
		</div>
	</div>
);
