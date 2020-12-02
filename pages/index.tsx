import React, { useState, useEffect } from 'react';
// import { NextPageContext } from 'next';

// Screens
import Loading from '@components/screens/loading';
import StatusBar from '@components/statusbar';
import XMB from '@components/common/xmb';

import styles from './UI.scss';

// any modifications to the default context, e.g. query types
// interface Context extends NextPageContext {}
function UI() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handleLoadingScreen = setTimeout(() => setLoading(false), 7000);

		return () => clearTimeout(handleLoadingScreen);
	});

	return (
		<div className={styles('app-container')}>
			{loading ?
				<Loading /> :
				<div className={styles('container')}>
					<StatusBar />
					<XMB />
				</div>
			}
		</div>
	);
}

export default UI;
