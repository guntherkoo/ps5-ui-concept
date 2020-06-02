import Clock from 'react-live-clock';

import styles from './Time.scss';

function Time() {
	return (
		<div className={styles('timestamp')}>
			<Clock
				format={'HH:mm:ss'}
				timezone={'America/New_York'}
				ticking
			/>
		</div>
	)
}

export default Time;
