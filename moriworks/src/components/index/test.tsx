import React from 'react';
// import Layout from "../utility/Layout";
import HeroBtn from './HeroBtm/HeroBtn';
import styles from './index.module.scss';
import Table from '../Table/Table';

interface props {}
const num = [1, 2, 3];
const Index: React.FC<props> = () => {
  return (
    <>
      ここはテストページです
      {/*  ここに処理を追加してください*/}
      <Table id={num} searchUser={false} isAdmin={false} />
    </>
  );
};

export default Index;
