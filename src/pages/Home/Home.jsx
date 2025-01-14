import FeatureItem from '../../components/FeatureItem/FeatureItem';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import React from 'react';
import findMp4 from '../../assets/mp4/find.mp4';
import heroImage from '../../assets/images/hero.png';
import heroImageWebp from '../../assets/webp/hero-desktop.webp';
import heroImageWebpMobile from '../../assets/webp/hero-mobile.webp';
import heroImageWebpTablet from '../../assets/webp/hero-tablet.webp';
import styles from './Home.module.css';
import trendingMp4 from '../../assets/mp4/trending.mp4';

const Home = () => {
  return (
    <>
      <NavBar />
      <section className={styles.heroSection}>
        <picture>
          <source
            type='image/webp'
            srcSet={`
            ${heroImageWebpMobile} 375w,
            ${heroImageWebpTablet} 768w,
            ${heroImageWebp} 1980w,
          `}
            alt='hero'
            className={styles.heroImage}
          />
          <img className={styles.heroImage} src={heroImage} alt='hero' />
        </picture>
        <div className={styles.projectTitle}>
          <h1 className={styles.title}>Memegle</h1>
          <h2 className={styles.subtitle}>gif search engine for you</h2>
        </div>
        <Link to='/search'>
          <button className={styles.cta}>start search</button>
        </Link>
      </section>
      <section className={styles.featureSection}>
        <div className={styles.featureSectionWrapper}>
          <h2 className={styles.featureTitle}>Features</h2>
          <div className={styles.featureItemContainer}>
            <FeatureItem title='See trending gif' imageSrc={trendingMp4} />
            <FeatureItem title='Find gif for free' imageSrc={findMp4} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
