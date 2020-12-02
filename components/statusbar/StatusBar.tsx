import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Time from '@components/common/time';
import Profile from '@components/common/profile';
import Wifi from '@components/icons/wifi.svg';
import Controller from '@components/icons/controller.svg';

import styles from './StatusBar.scss';

const players = ['one','two','three','four'];

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
					<Time />
					<Wifi className={styles('wifi')} />
				</div>
				<div className={styles('status-right')}>
					{players.map((item, i) =>
						<div className={styles('player', item)} key={i}>
							<Controller className={styles('controller')} />
						</div>
					)}
					<Profile />
				</div>
			</div>
		</CSSTransition>
	)
}

export default StatusBar;
