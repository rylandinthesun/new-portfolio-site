import { RiCloseFill } from 'react-icons/ri';
import { FiMail } from 'react-icons/fi';
import styles from '../styles/Toast.module.css';

const Toast = ({ showToast, setShowToast }) => {
	return (
		<div className={styles.toast}>
			<div className={styles.title}>Currently open to employment</div>
			<div className={styles.desc}>
				<span>If you like what you see ={`>`}</span>
				<a
					href="mailto:ryland.oehlers@gmail.com?subject=I WANT TO HIRE YOU!!!"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Email"
				>
					<FiMail />
				</a>
			</div>
			<RiCloseFill className={styles.closeBtn} onClick={() => setShowToast(!showToast)} />
		</div>
	);
};

export default Toast;
