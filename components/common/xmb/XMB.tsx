import { useState } from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import * as easings from 'd3-ease';
import GameData from './mockdata/game-data.json';

import styles from './XMB.scss';

function XMB() {
	const [items, set] = useState(GameData);
	const transitions = useTransition(items, item => item.name, {
		from: {
			transform: 'scale(1.2) translateY(-50px)',
			opacity: '0'
		},
		enter: {
			transform: 'scale(1) translateY(0)',
			opacity: '1'
		},
		leave: {
			transform: 'scale(1.2) translateY(-50px)',
			opacity: '0'
		},
		trail: 100,
		config: {
			easing: easings.easeCubicInOut
		}
	});

	return (
		<div className={styles('container')}>
			<div className={styles('scroll-bar')}>
				{transitions.map(({ item, props, key }) =>
					<animated.div
						className={styles('media')}
						style={props}
						key={key}
					>
						<div
							className={styles('media-art')}
							style={{backgroundImage: `url(${item.image})`}}
							aria-label={item.name}
						/>
					</animated.div>
				)}
			</div>
		</div>
	)
}

export default XMB;
