import Head from 'next/head';
import Image from 'next/image';
import selfPortrait from '../images/selfportrait.jpg';
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
		</div>
	);
}
