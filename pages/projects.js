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
	const res = await fetch('https://portfolio-website-woad-nine.vercel.app/api/projects');
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
