import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import Sidebar from '../components/Sidebar';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.css';

const Navbar = ({ themeSwitcher }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const menuIcon = (
    <FiMenu className={styles.menuBtn} onClick={() => setOpen(!open)} />
  );

  const closeIcon = (
    <RiCloseFill className={styles.menuBtn} onClick={() => setOpen(!open)} />
  );

  const onPageCircle = <span className={styles.onPageCircle} />;

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05, duration: 0.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1, duration: 0.2 });
  };

  return (
    <div className={styles.navbar}>
      <ul>
        <li
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className={styles.homeLink}
        >
          <Link href="/">
            <a>Ryland L. Oehlers</a>
          </Link>
        </li>
      </ul>

      <ul className={styles.pageLinks}>
        <li>
          <Link href="/about">
            <a>
              {router.route === '/about' && onPageCircle}
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>
              {router.route === '/projects' && onPageCircle}
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <a>
              {router.route === '/resume' && onPageCircle}
              Resume
            </a>
          </Link>
        </li>
      </ul>

      <ul className={styles.themeSwitcher}>
        <li>
          <span>Mode</span>
          <label htmlFor="theme-switcher">Theme Switcher</label>
          <input
            onClick={() => themeSwitcher()}
            type="checkbox"
            id="theme-switcher"
            name="theme-switcher"
          />
          <div>{open ? closeIcon : menuIcon}</div>
        </li>
      </ul>

      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
