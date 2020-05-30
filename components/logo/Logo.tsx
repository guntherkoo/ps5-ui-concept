import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import PSLogo from '@components/icons/ps_logo.svg';

import styles from './Logo.scss';

function Logo() {
	const [logo, set] = useState(false);
	const transitions = useTransition(logo, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: {
			duration: 1000,
		}
	});

	useEffect(() => {
		const init = setTimeout(() => {
			set(true);
		}, 1000);

		const final = setTimeout(() => {
			set(false);
		}, 6000);

		return () => clearTimeout(init, final);
	}, []);

	return transitions.map(({ item, key, props }) => (item && <animated.div className={styles('logo')} key={key} style={props} ><PSLogo /></animated.div>));
}

export default Logo;
