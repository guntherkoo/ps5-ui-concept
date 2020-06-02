import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import PSLogo from '@components/icons/ps_logo.svg';

import styles from './Logo.scss';

function Logo() {
	const [fade_in, setFadeIn] = useState(false);

	useEffect(() => {
		const fade = setTimeout(() => setFadeIn(true), 1000);
		return () => clearTimeout(fade);
	});

	return (
		<CSSTransition
			in={fade_in}
			timeout={5000}
			classNames='fade-in-out'
			onExited={() => setFadeIn(false)}
		>
			<PSLogo className={styles('logo')}/>
		</CSSTransition>
	);
}

export default Logo;
