import Clock from 'react-live-clock';

import styles from './Time.scss';

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
