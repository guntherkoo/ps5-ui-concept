import Time from '@components/common/time';
import Wifi from '@components/icons/wifi.svg';

import styles from './StatusBar.scss';

function StatusBar() {
	return (
		<div className={styles('status-bar')}>
			<div className={styles('status-left')}>
				<Time /><Wifi />
			</div>
			<div className={styles('status-right')}>
				<Time /><Wifi />
			</div>
		</div>
	)
}

export default StatusBar;
