import React from 'react';
// import Layout from "../utility/Layout";
import HeroBtn from './HeroBtm/HeroBtn';
import styles from './index.module.scss';
import Header from '../Header/Header';

interface props {}

const Index: React.FC<props> = () => {
  return (
    <>
      <Header type={true} />
      <div className={styles.Index_root}>
        <HeroBtn type={true} />
        <HeroBtn type={false} />
      </div>
    </>
  );
};

export default Index;
