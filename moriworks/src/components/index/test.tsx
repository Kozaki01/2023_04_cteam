import React from 'react';
// import Layout from "../utility/Layout";
import HeroBtn from './HeroBtm/HeroBtn';
import styles from './index.module.scss';
import Table from '../Table/Table';

interface props {}

const Index: React.FC<props> = () => {
  const profileData = [1, 2, 3]; // profileの配列

  return (
    <>
      ここはテストページです
      {/*  ここに処理を追加してください*/}
      <Table data={profileData} searchUser={false} select_user={1} />
    </>
  );
};

export default Index;
