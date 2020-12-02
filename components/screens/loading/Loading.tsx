import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Logo from '@components/logo';

import styles from './Loading.scss';

function Loading() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
	});

	return (
		<>
			<CSSTransition
				in={loading}
				timeout={5000}
				classNames='loading'
			>	
				<div className={styles('loading-screen')} />
			</CSSTransition>
			<Logo />
		</>
	);
}

export default Loading;
