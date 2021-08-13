import styles from '../styles/AboutPage.module.css';

const About = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h4>Ever since I was young, I wanted to be a rockstar...</h4>

				<section className={styles.summary}>
					<p className={styles.paragraph}>
						...just like any other kid who loves music. Luckily for me, I had a local rockstar dad, who made
						a decent career from playing music around the city of Toledo, OH, who always encouraged me to
						play instruments and be musical. Little did I know, that eventually as a young adult, I would be
						able to join a band, who took on the opportunity of being a professional full-time touring
						musician, and play music around the world. For most musicians, that’s the peak career
						accomplishment, touring and playing your own original music. It’s always something that I’ve
						been truly grateful to ever experience and be a part of.
					</p>
					<p className={styles.paragraphNext}>
						Like most musicians and songwriters, I started using DAW (Digital Audio Workstation) software to
						record songs and musical ideas on my computer. I remember buying FL Studio from Guitar Center
						when I was a Junior in high school. I’d go home and sit on my laptop for hours in my room making
						random hip hop beats or house techno songs (I still do this LOL) but, I was always fascinated by
						how these software’s worked and what technologies were used to create them. With my main focus
						on being a musician, I never took the time or chance to figure that out.
					</p>
					<p className={styles.paragraph}>
						And then when the year 2020 came around, I had this feeling of wanting something new, and that’s
						when I decided tp become a Software Developer. That’s been my main focus, and I can’t get
						enough. With Frontend development kind of calling to me the most, since it incorporates
						creativity and problem-solving. My dream is to be able to incorporate music and software to
						build technologies that are helpful and enjoyable for musicians, non-musicians & everyone in
						between.
					</p>
				</section>
			</main>
		</div>
	);
};

export default About;
