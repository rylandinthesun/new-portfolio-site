import Head from 'next/head';
import myResume from '../images/Ryland_Oehlers_Resume_2021.png';
import Image from 'next/image';
import styles from '../styles/ResumePage.module.css';

const Resume = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Resume | Ryland Oehlers Portfolio</title>
				<meta name="description" content="Ryland Oehlers resume photo and link to png version." />
			</Head>
			<main className={styles.main}>
				<a
					className={styles.pdfLink}
					href="https://docs.google.com/document/d/1uer86O2QxxePGpa5U20E9-qOsm1lQPnbiu5D6OhkaRA/edit?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					Click to view as PDF
				</a>

				<Image
					className={styles.resumePhoto}
					src={myResume}
					alt="Photo of resume"
					width={800}
					height={1000}
					quality={50}
					priority="eager"
				/>
			</main>
		</div>
	);
};

export default Resume;
