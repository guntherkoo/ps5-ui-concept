import { useSpring, animated } from 'react-spring';
import Time from '@components/common/time';
import Wifi from '@components/icons/wifi.svg';

import styles from './StatusBar.scss';

function StatusBar() {
	const status = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: {
			duration: 500,
		}
	});

	return (
		<animated.div className={styles('status-bar')} style={status}>
			<div className={styles('status-left')}>
				<Time /><Wifi />
			</div>
			<div className={styles('status-right')}>
				<Time /><Wifi />
			</div>
		</animated.div>
	)
}

export default StatusBar;
