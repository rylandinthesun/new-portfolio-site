import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import Sidebar from './Sidebar';
import { gsap } from 'gsap';
import styles from '../styles/NavBar.module.css';

const Navbar = ({ themeSwitcher }) => {
	const [
		open,
		setOpen
	] = useState(false);

	const [
		onPage,
		setOnPage
	] = useState(0);

	const menuIcon = <FiMenu className={styles.menuBtn} onClick={() => setOpen(!open)} />;

	const closeIcon = <RiCloseFill className={styles.menuBtn} onClick={() => setOpen(!open)} />;

	const onPageCircle = <span className={styles.onPageCircle} />;

	const onEnter = ({ currentTarget }) => {
		gsap.to(currentTarget, { scale: 1.05, duration: 0.2 });
	};

	const onLeave = ({ currentTarget }) => {
		gsap.to(currentTarget, { scale: 1, duration: 0.2 });
	};

	return (
		<div className={styles.navbar}>
			<ul>
				<li onMouseEnter={onEnter} onMouseLeave={onLeave} className={styles.homeLink}>
					<Link href="/">
						<a onClick={() => setOnPage(0)}>Ryland L. Oehlers</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.pageLinks}>
				<li>
					<Link href="/about">
						<a onClick={() => setOnPage(1)}>
							{onPage === 1 ? onPageCircle : null}
							About
						</a>
					</Link>
				</li>
				<li>
					<Link href="/projects">
						<a onClick={() => setOnPage(2)}>
							{onPage === 2 ? onPageCircle : null}
							Projects
						</a>
					</Link>
				</li>
				<li>
					<Link href="/resume">
						<a onClick={() => setOnPage(3)}>
							{onPage === 3 ? onPageCircle : null}
							Resume
						</a>
					</Link>
				</li>
			</ul>

			<ul className={styles.themeSwitcher}>
				<div>
					<span>Mode</span>
					<input onClick={() => themeSwitcher()} type="checkbox" id="theme-switcher" />
					<label htmlFor="theme-switcher" style={{ display: 'none' }}>
						Theme Switcher
					</label>
					<div>{open ? closeIcon : menuIcon}</div>
				</div>
			</ul>

			{open ? <Sidebar open={open} setOpen={setOpen} /> : null}
		</div>
	);
};

export default Navbar;
