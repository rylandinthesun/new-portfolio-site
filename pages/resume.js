import myResume from '../images/Ryland_Oehlers_Resume.jpg';
import Image from 'next/image';
import styles from '../styles/ResumePage.module.css';

const Resume = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<a
					className={styles.pdfLink}
					href="https://drive.google.com/file/d/1msk1l_0l58brFq_NNVUpwAEbLeOLNzlj/view?usp=sharing"
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
					quality={25}
				/>
			</main>
		</div>
	);
};

export default Resume;
