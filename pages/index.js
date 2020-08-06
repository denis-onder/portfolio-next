import Head from 'next/head';
import Link from 'next/link';
import Particles from 'react-particles-js';
import styles from '../styles/Home.module.scss';

const particlesConfig = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    line_linked: {
      enable: true,
      opacity: 0.02,
    },
    move: {
      direction: 'right',
      speed: 0.05,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
    },
    modes: {
      grab: {
        distance: 75,
      },
    },
  },
  retina_detect: true,
};

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>denis onder - home</title>
      </Head>
      <Particles params={particlesConfig} />
      <h1 className={styles.home_name}>
        denis <span>onder</span>
      </h1>
      <div className={styles.home_text}>
        <p>I am a full-stack web developer from Bosnia and Herzegovina.</p>
        <p>Currently working within the MERN stack.</p>
      </div>
      <Link href="/contact" passHref>
        <a className={styles.home_link}>contact me</a>
      </Link>
    </div>
  );
}
