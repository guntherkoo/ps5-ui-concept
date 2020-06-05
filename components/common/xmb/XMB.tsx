import { useState, useEffect, useRef } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import GameData from './mockdata/game-data';

import styles from './XMB.scss';

function XMB() {
	const [xmb_fade, setXMB] = useState(false);
	const [image_load, setImageLoad] = useState(false);
	const [xmb_width, setXMBWidth] = useState(0);
	const [on_hover_index, setHoverIndex] = useState('');
	const background = on_hover_index && GameData[on_hover_index].art;

	const scrollBar = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setXMB(true);
		
		const img = new Image();
		img.src = background;
		img.onload = () => {
			setImageLoad(true);
		}

		const xmb_container = document.getElementById('xmb');

		if (xmb_container != null) {
			setXMBWidth(xmb_container.offsetWidth);

			xmb_container.addEventListener('mousemove', handleMouseMove);
		}

		return () => {
			if (xmb_container != null) {
				xmb_container.removeEventListener('mousemove', handleMouseMove)
			}
		};
	});

	const handleMouseMove = (e) => {
		const mouse_percentage = Math.round(e.clientX / xmb_width * 100);

		if (!scrollBar.current) {
			return null;
		} else {
			if (mouse_percentage < 5) {
				scrollBar.current.style.transform = `translateX(0px)`;
			} else {
				scrollBar.current.style.transform = `translateX(-${mouse_percentage * 4}px)`;
			}
		}
	}

	const handleOnClick = i => {
		setImageLoad(false);
		setHoverIndex(i);
	}

	return (
		<>
			<TransitionGroup className={styles('game-art-background', {
				'show': on_hover_index
			})}>
				{GameData.map((item: any, i: number) => {
					if (Number(on_hover_index) === i) {
						return (
							<CSSTransition
								key={i}
								in={image_load}
								timeout={2000}
								classNames='game-art-load'
							>
								<div
									className={styles('game-art')}
									style={{
										backgroundImage: `url(${item.art})`
									}}
								/>
							</CSSTransition>
						)
					}
				})}
			</TransitionGroup>
			
			<div className={styles('container')}>
				<div id='xmb' ref={scrollBar} className={styles('scroll-bar')}>
					{GameData.map((item, i) => (
						<CSSTransition
							in={xmb_fade}
							timeout={1000}
							classNames='XMB-fade'
							key={i}
						>
							<div
								className={styles('media')}
								onClick={() => handleOnClick(i)}
								style={{
									transitionDelay: `${i * .075}s`
								}}
							>
								<div
									className={styles('media-art')}
									style={{backgroundImage: `url(${item.image})`}}
									aria-label={item.name}
								/>
							</div>
						</CSSTransition>
					))}
				</div>
			</div>
		</>
	)
}

export default XMB;
