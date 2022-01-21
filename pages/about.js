import { gsap } from 'gsap';
import Head from 'next/head';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from '../styles/AboutPage.module.css';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const h4Ref = useRef();
  const p1Ref = useRef();
  const p2Ref = useRef();
  const p3Ref = useRef();

  useEffect(() => {
    gsap.from(h4Ref.current, {
      opacity: 0,
      x: -40,
      duration: 1.6,
      ease: 'power4.out',
    });
    gsap.from(p1Ref.current, {
      opacity: 0,
      delay: 0.6,
      x: 20,
      duration: 1,
      ease: 'power4.out',
    });
    gsap.from(p2Ref.current, {
      scrollTrigger: {
        trigger: p2Ref.current,
        start: 'top 80%',
        end: 'top 40%',
        scrub: true,
      },
      autoAlpha: 0,
      duration: 0.6,
      opacity: 0,
      x: -20,
    });
    gsap.from(p3Ref.current, {
      scrollTrigger: {
        trigger: p3Ref.current,
        start: 'top 80%',
        end: 'top 40%',
        scrub: true,
      },
      autoAlpha: 0,
      duration: 0.6,
      opacity: 0,
      x: 20,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>About | Ryland Oehlers Portfolio Website</title>
        <meta
          name="description"
          content="Ever since I was young, I wanted to be a rockstar, just like any other kid who loves music."
        />
      </Head>
      <main className={styles.main}>
        <h4 ref={h4Ref}>
          Ever since I was young, I wanted to be a rockstar...
        </h4>

        <section className={styles.summary}>
          <p ref={p1Ref} className={styles.paragraph}>
            ...just like every other kid who loves music. Luckily for me, I had
            a local rockstar dad, who made a decent career from playing music
            around the city of Toledo, OH. He always encouraged me to pursue
            music and learn any instrument I wanted. I never expected that, in
            my early twenties, I would join a successful band and have the
            opportunity to be a professional full-time musician, touring and
            playing music around the world. For most musicians, that’s the peak
            career accomplishment. It’s always something that I’ve been truly
            grateful to experience.
          </p>
          <p ref={p2Ref} className={styles.paragraphNext}>
            I started using DAW (Digital Audio Workstation) software to record
            and produce songs on my computer. I remember buying FL Studio from
            Guitar Center in high school and sitting on my laptop for hours in
            my room making random hip hop beats or house techno songs (still
            do!). I was always fascinated by how sound production software
            worked and what technologies were used to create them.
          </p>
          <p ref={p3Ref} className={styles.paragraph}>
            When the music industry took a hit in 2020, I immediately saw an
            opportunity to explore my interest in software engineering. I soon
            enrolled and completed an intensive Software Development course. I’m most passionate about frontend
            development since it incorporates both creativity and logical
            design. My dream is to be able to incorporate music and software to
            build technologies that are helpful and enjoyable for musicians,
            non-musicians & everyone in between.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
