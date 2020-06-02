import GameData from './mockdata/game-data';

import styles from './XMB.scss';

function XMB() {
	return (
		<div className={styles('container')}>
			<div className={styles('scroll-bar')}>
				{GameData.map((item, key) => {
					return (
						<div
							className={styles('media')}
							key={key}
						>
							<div
								className={styles('media-art')}
								style={{backgroundImage: `url(${item.image})`}}
								aria-label={item.name}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default XMB;
