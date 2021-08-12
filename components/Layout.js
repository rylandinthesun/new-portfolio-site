import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';

const Layout = ({ children, themeSwitcher }) => {
	return (
		<div className={styles.layout}>
			<Navbar themeSwitcher={themeSwitcher} />
			{children}
		</div>
	);
};

export default Layout;
