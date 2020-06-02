import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import GameData from './mockdata/game-data';

import styles from './XMB.scss';

function XMB() {
	const [xmb_fade, setXMB] = useState(false);
	useEffect(() => setXMB(true));

	return (
		<div className={styles('container')}>
			<div className={styles('scroll-bar')}>
				{GameData.map((item, key) => {
					return (
						<CSSTransition
							in={xmb_fade}
							timeout={4000}
							classNames='XMB-fade'
							key={key}
						>
							<div className={styles('media')} style={{transitionDelay: ` ${ key * .075 }s` }}>
								<div
									className={styles('media-art')}
									style={{backgroundImage: `url(${item.image})`}}
									aria-label={item.name}
								/>
							</div>
						</CSSTransition>
					)
				})}
			</div>
		</div>
	)
}

export default XMB;
