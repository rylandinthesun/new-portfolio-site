import Head from 'next/head';
import ProjectList from '../components/ProjectList';
import styles from '../styles/ProjectPage.module.css';

const Projects = ({ projects }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Projects | Ryland Oehlers Portfolio</title>
				<meta name="description" content="List of application projects created by Ryland Oehlers." />
			</Head>
			<main className={styles.main}>
				<ProjectList projects={projects} />
			</main>
		</div>
	);
};

export const getStaticProps = async () => {
	const res = await fetch('https://rylandoehlers.com/api/projects');
	const projects = await res.json();

	if (!projects) {
		return {
			notFound : true
		};
	}

	return {
		props : { projects }
	};
};

export default Projects;
