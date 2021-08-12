import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import styles from '../styles/NavBar.module.css';
import Sidebar from './Sidebar';

const Navbar = ({ themeSwitcher }) => {
	const [
		open,
		setOpen
	] = useState(false);

	const menuIcon = <FiMenu className={styles.menuBtn} onClick={() => setOpen(!open)} />;

	const closeIcon = <RiCloseFill className={styles.menuBtn} onClick={() => setOpen(!open)} />;

	return (
		<div className={styles.navbar}>
			<ul>
				<li className={styles.homeLink}>
					<Link href="/">
						<a>Ryland L. Oehlers</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.pageLinks}>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href="/projects">
						<a>Projects</a>
					</Link>
				</li>
				<li>
					<Link href="/resume">
						<a>Resume</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.themeSwitcher}>
				<div>
					<span>Mode</span>
					<input onClick={() => themeSwitcher()} type="checkbox" id="theme-switcher" />
					<div>{open ? closeIcon : menuIcon}</div>
				</div>
			</ul>

			{open ? <Sidebar open={open} /> : null}
		</div>
	);
};

export default Navbar;
