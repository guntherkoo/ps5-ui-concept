import Clock from 'react-live-clock';

import styles from './Time.scss';

function checkTime(i) {
	if (i < 10) {i = '0' + i};  // add zero in front of numbers < 10
	return i;
}

function Time() {
	return (
		<Clock
			className={styles('timestamp')}
			format={'HH:mm:ss'}
			timezone={'America/New_York'}
			ticking
		/>
	)
}

export default Time;
