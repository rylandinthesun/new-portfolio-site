import ProjectList from '../components/ProjectList';
import styles from '../styles/ProjectPage.module.css';

const Projects = ({ projects }) => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<ProjectList projects={projects} />
			</main>
		</div>
	);
};

export const getStaticProps = async () => {
	const res = await fetch('http://localhost:3000/api/projects');
	const data = await res.json();

	return {
		props : { projects: data }
	};
};

export default Projects;
