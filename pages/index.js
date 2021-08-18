import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import selfPortrait from '../images/selfportrait.jpg';
import { FiMail } from 'react-icons/fi';
import {
	SiJavascript,
	SiPostgresql,
	SiFirebase,
	SiVisualstudiocode,
	SiNextDotJs,
	SiJest,
	SiJquery,
	SiTailwindcss,
	SiTypescript,
	SiMongodb
} from 'react-icons/si';
import {
	FaLinkedin,
	FaGithub,
	FaInstagram,
	FaTwitter,
	FaReact,
	FaNodeJs,
	FaPython,
	FaDatabase,
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaGitAlt,
	FaArrowRight
} from 'react-icons/fa';
import ProjectList from '../components/ProjectList';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

import styles from '../styles/Home.module.css';

gsap.registerPlugin(ScrollTrigger);

const Home = ({ projects }) => {
	const h1Ref = useRef();
	const summaryRef = useRef();
	const toolKitRef = useRef();
	const projectsRef = useRef();
	const linkRef = useRef();

	useEffect(() => {
		gsap.from(h1Ref.current, { opacity: 0, delay: 0.5, duration: 1, y: -50, ease: 'power4.out' });

		gsap.from('.stagger-in', {
			scrollTrigger : {
				trigger : summaryRef.current,
				start   : 'top 80%',
				end     : 'top 20%',
				scrub   : true
			},
			autoAlpha     : 0,
			opacity       : 0,
			duration      : 0.4,
			x             : -20,
			stagger       : 0.2
		});
		gsap.from('.para-animate', {
			scrollTrigger : {
				trigger : summaryRef.current,
				start   : 'top 80%',
				end     : 'top 20%',
				scrub   : true
			},
			autoAlpha     : 0,
			opacity       : 0,
			y             : -20,
			duration      : 0.4
		});
		gsap.from('.stagger-in2', {
			scrollTrigger : {
				trigger : projectsRef.current,
				start   : 'top 90%',
				end     : 'top 10%',
				scrub   : true
			},
			autoAlpha     : 0,
			opacity       : 0,
			duration      : 0.4,
			x             : -20,
			stagger       : 0.2
		});
		gsap.from('.stagger-in3', {
			scrollTrigger : {
				trigger : toolKitRef.current,
				start   : 'top 80%',
				end     : 'top 20%',
				scrub   : true
			},
			autoAlpha     : 0,
			opacity       : 0,
			duration      : 0.2,
			x             : -20,
			stagger       : 0.2
		});
		gsap.from('.stagger-in4', {
			scrollTrigger : {
				trigger : toolKitRef.current,
				start   : 'top 80%',
				end     : 'top 20%',
				scrub   : true
			},
			autoAlpha     : 0,
			delay         : 0.8,
			opacity       : 0,
			duration      : 0.4,
			x             : 20,
			stagger       : 0.2
		});
		gsap.from(linkRef.current, {
			scrollTrigger : {
				trigger : linkRef.current,
				start   : 'top 90%',
				end     : 'top 40%',
				scrub   : true
			},
			autoAlpha     : 0,
			opacity       : 0,
			y             : -20,
			duration      : 0.4
		});
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Ryland Oehlers Portfolio</title>
				<meta name="description" content="Portfolio for Ryland Oehlers" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 ref={h1Ref}>SOFTWARE DEVELOPER & MUSICIAN.</h1>

				<Image
					src={selfPortrait}
					alt="Picture of the author"
					width={300}
					height={400}
					objectFit="cover"
					priority
				/>
			</main>

			<section ref={summaryRef} className={styles.summary}>
				<div className={styles.summaryTitle}>
					<h2 className="stagger-in">S</h2>
					<h2 className="stagger-in">U</h2>
					<h2 className="stagger-in">M</h2>
					<h2 className="stagger-in">M</h2>
					<h2 className="stagger-in">A</h2>
					<h2 className="stagger-in">R</h2>
					<h2 className="stagger-in">Y</h2>
				</div>
				<div className={`${styles.content} para-animate`}>
					<p>
						Full-Stack Software Engineer who was a Full-Time Touring Musician for 10+ years. Specializing in
						Front-End Development, I am passionate about bringing together creative designs with code.
					</p>
					<section className={styles.socials}>
						<a
							href="mailto:ryland.oehlers@gmail.com?subject=Website Inquiry"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FiMail />
						</a>
						<a href="https://www.linkedin.com/in/rylandoehlers" target="_blank" rel="noopener noreferrer">
							<FaLinkedin />
						</a>
						<a href="https://www.github.com/rylandinthesun" target="_blank" rel="noopener noreferrer">
							<FaGithub />
						</a>
						<a href="https://www.instagram.com/rylandinthesun" target="_blank" rel="noopener noreferrer">
							<FaInstagram />
						</a>
						<a href="https://www.twitter.com/rylandinthesun" target="_blank" rel="noopener noreferrer">
							<FaTwitter />
						</a>
					</section>
				</div>
			</section>

			<section ref={toolKitRef} className={styles.toolKit}>
				<div className={styles.tools}>
					<div className={`${styles.toolCard} stagger-in3`}>
						<FaReact />
						<span>React</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<FaNodeJs />
						<span>Node/Express</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<SiJavascript />
						<span>JavaScript</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<SiNextDotJs />
						<span>Next</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<FaPython />
						<span>Python</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<FaDatabase />
						<span>SQL</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<SiPostgresql />
						<span>PostgreSQL</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<FaHtml5 />
						<span>HTML</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<FaCss3Alt />
						<span>CSS</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<SiFirebase />
						<span>Firebase</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<FaBootstrap />
						<span>Bootstrap</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<SiTailwindcss />
						<span>Tailwind</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<FaGitAlt />
						<span>Git</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<SiJest />
						<span>Jest</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<SiJquery />
						<span>JQuery</span>
					</div>
					<div className={`${styles.toolCard} stagger-in3`}>
						<SiVisualstudiocode />
						<span>VS Code</span>
					</div>
					<div className={`${styles.toolCard} ${styles.familiarWith} stagger-in3`}>
						<SiTypescript />
						<span>TypeScript</span>
					</div>
					<div className={`${styles.toolCard} ${styles.familiarWith} stagger-in3`}>
						<SiMongodb />
						<span>MongoDB</span>
					</div>
				</div>

				<div className={styles.toolkitTitle}>
					<h2 className="stagger-in4">T</h2>
					<h2 className="stagger-in4">O</h2>
					<h2 className="stagger-in4">O</h2>
					<h2 className="stagger-in4">L</h2>
					<h2 className="stagger-in4">K</h2>
					<h2 className="stagger-in4">I</h2>
					<h2 className="stagger-in4">T</h2>
				</div>
			</section>

			<h6 className={`${styles.familiar} stagger-in3`}>GREY = FAMILIAR WITH</h6>

			<section ref={projectsRef} className={styles.projects}>
				<div className={styles.projectsTitle}>
					<h1 className="stagger-in2">P</h1>
					<h1 className="stagger-in2">R</h1>
					<h1 className="stagger-in2">O</h1>
					<h1 className="stagger-in2">J</h1>
					<h1 className="stagger-in2">E</h1>
					<h1 className="stagger-in2">C</h1>
					<h1 className="stagger-in2">T</h1>
					<h1 className="stagger-in2">S</h1>
				</div>
				<div>
					<ProjectList projects={projects.slice(0, 2)} />
				</div>

				<Link href="/projects">
					<a ref={linkRef} className={styles.moreProjects}>
						More Projects<span>
							<FaArrowRight />
						</span>
					</a>
				</Link>
			</section>
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
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
