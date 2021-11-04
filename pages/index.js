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
  SiNextdotjs,
  SiJest,
  SiJquery,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
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
  FaArrowRight,
  FaAngular,
} from 'react-icons/fa';
import ProjectList from '../components/ProjectList';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

import styles from '../styles/Home.module.css';
import ToolkitIcon from '../components/ToolkitIcon';
import SocialLink from '../components/SocialLink';

gsap.registerPlugin(ScrollTrigger);

const Home = ({ projects }) => {
  const h1Ref = useRef();
  const h1Ref2 = useRef();
  const h1Ref3 = useRef();
  const mainTitleRef = useRef();
  const summaryRef = useRef();
  const toolKitRef = useRef();
  const projectsRef = useRef();
  const linkRef = useRef();

  const timeline = gsap.timeline();

  useEffect(() => {
    timeline.from(h1Ref.current, {
      opacity: 0,
      delay: 0.6,
      duration: 0.5,
      y: 50,
      ease: 'power1.out',
      stagger: 0.1,
    });
    timeline.from(h1Ref2.current, {
      opacity: 0,
      duration: 0.5,
      y: 50,
      ease: 'power1.out',
      stagger: 0.1,
    });
    timeline.from(h1Ref3.current, {
      opacity: 0,
      duration: 0.5,
      y: 50,
      ease: 'power1.out',
      stagger: 0.1,
    });
    timeline.to(mainTitleRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: 'power1.out',
      stagger: 0.1,
      color: '#00875a',
      textShadow: '6px 6px 0px rgba(0,0,0,0.25)'
    });

    gsap.from('.stagger-in', {
      scrollTrigger: {
        trigger: summaryRef.current,
        start: 'top 80%',
        end: 'top 40%',
        scrub: true,
      },
      autoAlpha: 0,
      opacity: 0,
      duration: 0.6,
      x: -20,
      stagger: 0.2,
    });
    gsap.from('.para-animate', {
      scrollTrigger: {
        trigger: summaryRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
      autoAlpha: 0,
      opacity: 0,
      y: -20,
      duration: 0.4,
    });
    gsap.from('.stagger-in2', {
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top 80%',
        end: 'top 40%',
        scrub: true,
      },
      autoAlpha: 0,
      opacity: 0,
      duration: 0.6,
      x: -20,
      stagger: 0.2,
    });
    gsap.from('.stagger-in3', {
      scrollTrigger: {
        trigger: toolKitRef.current,
        start: 'top 80%',
        end: 'top 40%',
        scrub: true,
      },
      autoAlpha: 0,
      opacity: 0,
      duration: 0.4,
      x: -20,
      stagger: 0.2,
    });
    gsap.from('.stagger-in4', {
      scrollTrigger: {
        trigger: toolKitRef.current,
        start: 'top 80%',
        end: 'top 40%',
        scrub: true,
      },
      autoAlpha: 0,
      delay: 0.8,
      opacity: 0,
      duration: 0.4,
      x: 20,
      stagger: 0.2,
    });
    gsap.from(linkRef.current, {
      scrollTrigger: {
        trigger: linkRef.current,
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
      },
      autoAlpha: 0,
      opacity: 0,
      y: -20,
      duration: 0.4,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Ryland Oehlers Portfolio Website</title>
        <meta
          name="description"
          content="Full-Stack Software Engineer who was a Full-Time Touring Musician for 10+ years."
        />
        <meta
          name="image"
          content="https://i.postimg.cc/CL7DhK6s/selfportrait-Meta.jpg"
        />
        {/* Open Graph */}
        <meta property="og:title" content="Ryland Oehlers Portfolio Website" />
        <meta property="og:url" content="https://www.rylandoehlers.com/" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/CL7DhK6s/selfportrait-Meta.jpg"
        />
        <meta
          property="og:description"
          content="Full-Stack Software Engineer who was a Full-Time Touring Musician for 10+ years."
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content="Ryland Oehlers Portfolio Website"
        />
        <meta property="twitter:creator" content="@rylandinthesun" />
        <meta
          property="twitter:image"
          content="https://i.postimg.cc/CL7DhK6s/selfportrait-Meta.jpg"
        />
        <meta
          property="twitter:description"
          content="Full-Stack Software Engineer who was a Full-Time Touring Musician for 10+ years."
        />
      </Head>

      <main className={styles.main}>
        <h1 ref={mainTitleRef}>
          <span ref={h1Ref}>SOFTWARE</span>
          <span ref={h1Ref2}>DEVELOPER</span>
          <span ref={h1Ref3}>& MUSICIAN.</span>
        </h1>

        <Image
          src={selfPortrait}
          alt="Picture of the author"
          width={350}
          height={450}
          objectFit="cover"
          quality={75}
          loading="eager"
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
            Full-Stack Software Engineer who was a Full-Time Touring Musician
            for 10+ years. Specializing in Front-End Development, I am
            passionate about bringing together creative designs with code.
          </p>
          <section className={styles.socials}>
            <SocialLink
              url="mailto:ryland.oehlers@gmail.com?subject=Website Inquiry"
              icon={<FiMail color="#EA4335" />}
            />
            <SocialLink
              url="https://www.linkedin.com/in/rylandoehlers"
              icon={<FaLinkedin color=" #0077B5" />}
            />
            <SocialLink
              url="https://www.github.com/rylandinthesun"
              icon={<FaGithub color="#F4CBB2" />}
            />
            <SocialLink
              url="https://www.instagram.com/rylandinthesun"
              icon={<FaInstagram color="#F58529" />}
            />
            <SocialLink
              url="https://www.twitter.com/rylandinthesun"
              icon={<FaTwitter color="#55ACEE" />}
            />
          </section>
        </div>
      </section>

      <section ref={toolKitRef} className={styles.toolKit}>
        <div className={styles.tools}>
          <ToolkitIcon icon={<FaHtml5 color="#FF5733" />} name="HTML" />
          <ToolkitIcon icon={<FaCss3Alt color="#264de4" />} name="CSS" />
          <ToolkitIcon
            icon={<SiJavascript color="#F0DB4F" />}
            name="JavaScript"
          />
          <ToolkitIcon icon={<FaReact color="#61DBFB" />} name="React" />
          <ToolkitIcon
            icon={<FaNodeJs color="#68A063" />}
            name="Node/Express"
          />
          <ToolkitIcon icon={<SiNextdotjs color="#000" />} name="Next" />
          <ToolkitIcon
            icon={<SiTypescript color="#007acc" />}
            name="Typescript"
          />
          <ToolkitIcon icon={<FaPython color="#4b8bbe" />} name="Python" />
          <ToolkitIcon icon={<FaDatabase color="#f29111" />} name="SQL" />
          <ToolkitIcon
            icon={<SiPostgresql color="#0064a5" />}
            name="PostgrSQL"
          />
          <ToolkitIcon icon={<SiFirebase color="fccb2b" />} name="Firebase" />
          <ToolkitIcon
            icon={<FaBootstrap color="#563d7c" />}
            name="Bootstrap"
          />
          <ToolkitIcon
            icon={<SiTailwindcss color="#4dc0b5" />}
            name="Tailwind"
          />
          <ToolkitIcon icon={<FaGitAlt color="f34f29" />} name="Git" />
          <ToolkitIcon icon={<SiJest color="#e34c26" />} name="Jest" />
          <ToolkitIcon icon={<SiJquery color="#78cff5" />} name="JQuery" />
          <ToolkitIcon
            icon={<SiVisualstudiocode color="#0078d7" />}
            name="VS Code"
          />
          <ToolkitIcon
            icon={<FaAngular color="grey" />}
            name="Angular"
            familiarWith
          />
          <ToolkitIcon
            icon={<SiMongodb color="grey" />}
            name="MongoDB"
            familiarWith
          />
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

      <h6 className={`${styles.familiar} stagger-in3`}>
        <span>GREY</span> = FAMILIAR WITH
      </h6>

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
            More Projects
            <span>
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
  const res = await fetch('https://rylandoehlers.com/api/projects');
  const projects = await res.json();

  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects },
  };
};
