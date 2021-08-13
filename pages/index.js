import Head from 'next/head';
import Image from 'next/image';
import selfPortrait from '../images/selfportrait.jpg';
import { FiMail } from 'react-icons/fi';
import {
	SiJavascript,
	SiPostgresql,
	SiFirebase,
	SiVisualstudiocode,
	SiNextDotJs,
	SiJest,
	SiJquery,
	SiTailwindcss,
	SiTypescript,
	SiMongodb
} from 'react-icons/si';
import {
	FaLinkedin,
	FaGithub,
	FaInstagram,
	FaTwitter,
	FaReact,
	FaNodeJs,
	FaPython,
	FaDatabase,
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaGitAlt
} from 'react-icons/fa';
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
				<div className={styles.summaryTitle}>
					<h2>S</h2>
					<h2>U</h2>
					<h2>M</h2>
					<h2>M</h2>
					<h2>A</h2>
					<h2>R</h2>
					<h2>Y</h2>
				</div>
				<div className={styles.content}>
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

			<section className={styles.toolKit}>
				<div className={styles.tools}>
					<div className={styles.toolCard}>
						<FaReact />
						<span>React</span>
					</div>
					<div className={styles.toolCard}>
						<FaNodeJs />
						<span>Node/Express</span>
					</div>
					<div className={styles.toolCard}>
						<SiJavascript />
						<span>JavaScript</span>
					</div>
					<div className={styles.toolCard}>
						<SiNextDotJs />
						<span>Next</span>
					</div>
					<div className={styles.toolCard}>
						<FaPython />
						<span>Python</span>
					</div>
					<div className={styles.toolCard}>
						<FaDatabase />
						<span>SQL</span>
					</div>
					<div className={styles.toolCard}>
						<SiPostgresql />
						<span>PostgreSQL</span>
					</div>
					<div className={styles.toolCard}>
						<FaHtml5 />
						<span>HTML</span>
					</div>
					<div className={styles.toolCard}>
						<FaCss3Alt />
						<span>CSS</span>
					</div>
					<div className={styles.toolCard}>
						<SiFirebase />
						<span>Firebase</span>
					</div>
					<div className={styles.toolCard}>
						<FaBootstrap />
						<span>Bootstrap</span>
					</div>
					<div className={styles.toolCard}>
						<SiTailwindcss />
						<span>Tailwind</span>
					</div>
					<div className={styles.toolCard}>
						<FaGitAlt />
						<span>Git</span>
					</div>
					<div className={styles.toolCard}>
						<SiJest />
						<span>Jest</span>
					</div>
					<div className={styles.toolCard}>
						<SiJquery />
						<span>JQuery</span>
					</div>
					<div className={styles.toolCard}>
						<SiVisualstudiocode />
						<span>VS Code</span>
					</div>
					<div
						className={[
							styles.toolCard,
							styles.familiarWith
						].join(' ')}
					>
						<SiTypescript />
						<span>TypeScript</span>
					</div>
					<div
						className={[
							styles.toolCard,
							styles.familiarWith
						].join(' ')}
					>
						<SiMongodb />
						<span>MongoDB</span>
					</div>
				</div>

				<div className={styles.toolkitTitle}>
					<h2>T</h2>
					<h2>O</h2>
					<h2>O</h2>
					<h2>L</h2>
					<h2>K</h2>
					<h2>I</h2>
					<h2>T</h2>
				</div>
			</section>

			<h6 className={styles.familiar}>GREY = FAMILIAR WITH</h6>
		</div>
	);
}
