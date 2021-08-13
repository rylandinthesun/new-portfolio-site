import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ open, setOpen }) => {
	return (
		<div className={styles.sidebar}>
			<ul>
				<li>
					<Link href="/about">
						<a onClick={() => setOpen(!open)}>About</a>
					</Link>
				</li>
				<li>
					<Link href="/projects">
						<a onClick={() => setOpen(!open)}>Projects</a>
					</Link>
				</li>
				<li>
					<Link href="/resume">
						<a onClick={() => setOpen(!open)}>Resume</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
