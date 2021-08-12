import Head from 'next/head';
import Image from 'next/image';
import selfPortrait from '../images/selfportrait.jpg';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

export default function Home () {
	return (
		<div className={styles.container}>
			<Head>
				<title>Ryland Oehlers Portfolio</title>
				<meta name="description" content="Portfolio for Ryland Oehlers" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>SOFTWARE DEVELOPER & MUSICIAN.</h1>
				<Image
					className={styles.selfPortrait}
					src={selfPortrait}
					alt="Picture of the author"
					width={300}
					height={400}
					objectFit="cover"
				/>
			</main>

			<section className={styles.summary}>
				<div>
					<h2>S</h2>
					<h2>U</h2>
					<h2>M</h2>
					<h2>M</h2>
					<h2>A</h2>
					<h2>R</h2>
					<h2>Y</h2>
				</div>
				<div>
					<p>
						Full-Stack Software Engineer who was a Full-Time Touring Musician for 10+ years. Specializing in
						Front-End Development, I am passionate about bringing together creative designs with code.
					</p>
					<section className={styles.socials}>
						<a
							href="mailto:ryland.oehlers@gmail.com?subject=Website Inquiry"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FiMail />
						</a>
						<a href="https://www.linkedin.com/in/rylandoehlers" target="_blank" rel="noopener noreferrer">
							<FaLinkedin />
						</a>
						<a href="https://www.github.com/rylandinthesun" target="_blank" rel="noopener noreferrer">
							<FaGithub />
						</a>
						<a href="https://www.instagram.com/rylandinthesun" target="_blank" rel="noopener noreferrer">
							<FaInstagram />
						</a>
						<a href="https://www.twitter.com/rylandinthesun" target="_blank" rel="noopener noreferrer">
							<FaTwitter />
						</a>
					</section>
				</div>
			</section>
		</div>
	);
}
