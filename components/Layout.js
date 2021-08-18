import { useState, useEffect } from 'react';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Toast from './Toast';

const Layout = ({ children, themeSwitcher }) => {
	const [
		showToast,
		setShowToast
	] = useState(false);

	useEffect(() => {
		let timer = setTimeout(() => setShowToast(!showToast), 1500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className={styles.layout}>
			{showToast ? <Toast showToast={showToast} setShowToast={setShowToast} /> : null}

			<Navbar themeSwitcher={themeSwitcher} />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
