import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const ProjectList = ({ projects }) => {
	useEffect(() => {
		gsap.from('.animate', {
			scrollTrigger : {
				trigger : '.animate',
				start   : 'center 80%',
				end     : 'center 20%',
				scrub   : true
			},
			autoAlpha     : 0,
			opacity       : 0,
			y             : -20,
			duration      : 0.2,
			stagger       : 0.2
		});
	}, []);

	return (
		<div>
			{projects.map((p) => (
				<div key={p.id}>
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
				</div>
			))}
		</div>
	);
};

export default ProjectList;
