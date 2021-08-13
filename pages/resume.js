import styles from '../styles/ResumePage.module.css';
// import myResume from '../public/RylandOehlersResume.pdf';

const Resume = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<a
					href={`${process.env.PUBLIC_URL}/RylandOehlersResume.pdf`}
					download="RylandOehlersResume.pdf"
					title="Resume"
				>
					Click to download
				</a>
			</main>
		</div>
	);
};

export default Resume;
