import React from 'react';
import Layout from "../utility/Layout";
import HeroBtn from "./HeroBtm/HeroBtn";
import styles from "./index.module.scss"

interface props{

}
const Index: React.FC<props> = () => {
  return (
    <div className={styles.Index_root}>
      <HeroBtn type={true}/>
      <HeroBtn type={false}/>
    </div>
  );
};

export default Index;