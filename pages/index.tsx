import React, { Component } from 'react';
import { NextPageContext } from 'next';
// Screens
import Loading from '@components/screens/loading';

import styles from './UI.scss';

// any modifications to the default context, e.g. query types
interface Context extends NextPageContext {}


class UI extends Component {
	static async getInitialProps(ctx: Context) {
		console.log(ctx.query, '!@!@');

		return {
			page_props: 'Hello'
		}
	}

	state = {
		loading: true
	}

	componentDidMount() {
		this.handleLoadingScreen();
	}

	handleLoadingScreen = () => {
		setTimeout(() => {
			this.setState({
				loading: false
			});
		}, 8000);
	}

	render() {
		const {
			loading,
		} = this.state;

		return (
			<div className={styles('main-container')}>
				{loading && <Loading />}
			</div>
		)
	}

}

export default UI;
