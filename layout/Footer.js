import Link from 'next/link';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import SocialLink from '../components/SocialLink';
import styles from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.myInfo}>
					<h1>Ryland L. Oehlers</h1>
					<a
						className={styles.emailLink}
						href="mailto:ryland.oehlers@gmail.com?subject=Website Inquiry"
						target="_blank"
						rel="noopener noreferrer"
					>
						ryland.oehlers@gmail.com
					</a>
					<div className={styles.socialLinks}>
					<SocialLink
              url="https://www.instagram.com/rylandinthesun"
              icon={<FaInstagram color="#F58529" />}
            />
						<SocialLink
              url="https://www.twitter.com/rylandinthesun"
              icon={<FaTwitter color="#55ACEE" />}
            />
					</div>
				</div>
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
			</main>
			<footer>
				<span>&copy;</span> 2021 Ryland Oehlers
			</footer>
		</div>
	);
};

export default Footer;
