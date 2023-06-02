import React from 'react';
// import Layout from "../utility/Layout";
import HeroBtn from './HeroBtm/HeroBtn';
import styles from './index.module.scss';
import Signup from '../Signup';

interface props {
  type: void;
}

const Index: React.FC<props> = () => {
  return (
    <div className={styles.Index_root}>
      {/* <HeroBtn type={true} />
      <HeroBtn type={false} /> */}
      <Signup isUser={true} />
    </div>
  );
};

export default Index;
