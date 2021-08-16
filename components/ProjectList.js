import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
	return (
		<div>
			{projects.map((p) => (
				<ProjectCard
					key={p.id}
					title={p.title}
					desc={p.desc}
					photo={p.photo}
					width={p.width}
					height={p.height}
					tech={p.tech}
					link={p.link}
					github={p.github}
				/>
			))}
		</div>
	);
};

export default ProjectList;
