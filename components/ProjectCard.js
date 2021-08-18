import Image from 'next/image';

import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ key, title, desc, photo, width, height, tech, link, github }) => {
	return (
		<div key={key} className={`${styles.card} animate`}>
			<div className={styles.imgContainer}>
				<Image
					className={styles.projectImg}
					src={photo}
					alt={title}
					height={height}
					width={width}
					objectFit="cover"
					priority={true}
					quality={50}
				/>
			</div>

			<div className={styles.info}>
				<div className={styles.titleLinks}>
					<h4>{title}</h4>
					<div className={styles.links}>
						<a href={link} target="_blank" rel="noopener noreferrer">
							Site
						</a>
						<a href={github} target="_blank" rel="noopener noreferrer">
							Code
						</a>
					</div>
				</div>

				<p>{desc}</p>
				<div className={styles.tech}>{tech.map((t) => <span>{t}</span>)}</div>
			</div>
		</div>
	);
};

export default ProjectCard;
