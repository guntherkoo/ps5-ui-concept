import { useSpring, animated } from 'react-spring';
import Logo from '@components/logo';

import styles from './Loading.scss';

function Loading() {
	const loading = useSpring({
		opacity: 0,
		from: { opacity: 1 },
		delay: 4000,
		config: {
			duration: 1000,
		}
	});

	return (
		<>
			<animated.div
				className={styles('container')}
				style={loading}
			/>
			<Logo />
		</>
	);
}

export default Loading;
