import styles from './Profile.scss';

const ps_plus = {
	name: 'PlayStation Plus',
	url: '/static/images/psplus.png'
}

const profile_pic = {
	name: 'PlayStation Profile Pic',
	url: '/static/images/profile.jpg'
}

interface Info {
	username: string,
	status: string,
}

function Profile(info: Info) {
	return (
		<div className={styles('container')}>
			<div className={styles('pic')}>
				<div className={styles('ps-plus')}>
					<img src={ps_plus.url} alt={ps_plus.name} aria-label={ps_plus.name} />
				</div>
				<img src={profile_pic.url} alt={profile_pic.name} aria-label={profile_pic.name} />
			</div>
			<div className={styles('info')}>
				<h4>
					{info.username}
				</h4>
				<h5>
					{info.status}
				</h5>
			</div>
		</div>
	)
}

Profile.defaultProps = {
	username: 'acemanx19',
	status: 'Online',
}

export default Profile;
