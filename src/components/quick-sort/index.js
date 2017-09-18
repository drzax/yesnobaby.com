import { h, Component } from 'preact';
import style from './style.scss';
import cx from 'classnames';

export default class QuickSort extends Component {
	handleKeyup(e) {
		console.log('e.key', e.key);
	}
	constructor() {
		super();
		this.handleKeyup = this.handleKeyup.bind(this);
	}

	componentWillMount() {
		document.addEventListener('keyup', this.handleKeyup);
		(this.props.names || [])
			.forEach(name => this.choicesMap.set(name, Object.assign({}, name)));
		this.setState({
			names: Array.from(this.choicesMap)
		});
	}
	componentWillReceiveProps(newProps, newState) {
		if (newProps.names) {
			newProps.names
				.filter(name => !this.choicesMap.has(name))
				.forEach(name => {
					this.choicesMap.set(name, Object.assign({}, name));
				});
			this.setState({
				names: Array.from(this.choicesMap)
			});
		}
	}

	componentWillUnmount() {
		document.removeEventListener('keyup', this.handleKeyup);
	}

	render(props, { names }) {
		return (
			<div className={style.choices} onKeyup={this.handleKeyup}>
				{names.map(choice => (
					<div className={style.choice}>
						<div>{choice[1].name}</div>
					</div>
				))}
				<div className={style.controls}>
					<div className={cx(style.keyButton)}>
						<div className={style.key}>
							<button>◀</button>
						</div>
						<div className={style.label}>No</div>
					</div>
					<div className={cx(style.keyButton)}>
						<div className={style.label}>Yes</div>
						<div className={style.key}>
							<button>▶</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
