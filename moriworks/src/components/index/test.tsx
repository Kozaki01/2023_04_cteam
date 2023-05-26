import React from 'react';
// import Layout from "../utility/Layout";
import HeroBtn from './HeroBtm/HeroBtn';
import styles from './index.module.scss';
import Table from '../Table';

interface props {}
const Index: React.FC<props> = () => {
  return (
    <>
      ここはテストページです
      {/*  ここに処理を追加してください*/}
      <Table id={1} isCompany={false} />
    </>
  );
};

export default Index;
