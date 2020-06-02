import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Time from '@components/common/time';
import Wifi from '@components/icons/wifi.svg';

import styles from './StatusBar.scss';

function StatusBar() {
	const [fade_in, setFadeIn] = useState(false);
	useEffect(() => setFadeIn(true));

	return (
		<CSSTransition
			in={fade_in}
			timeout={1000}
			classNames='status'
		>
			<div className={styles('status-bar')}>
				<div className={styles('status-left')}>
					<Time /><Wifi />
				</div>
				<div className={styles('status-right')}>
					<Time /><Wifi />
				</div>
			</div>
		</CSSTransition>
	)
}

export default StatusBar;
