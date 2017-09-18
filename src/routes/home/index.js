import { h, Component } from 'preact';
import QuickSort from '../../components/quick-sort';
import NamesFilter from '../../components/names-filter';
import style from './style';

export default class Home extends Component {
	render(props, { names }) {
		return (
			<div>
				<NamesFilter />
			</div>
		);
	}
}
