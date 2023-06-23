import React from 'react';
import PageComponent from '../components/Profile/user';
import Header from '../components/Header/Header';
import { useRouter } from 'next/router';

const Index = () => {
  return (
    <>
      <Header type={false} />
      <PageComponent account_id={1} />
    </>
  );
};

export default Index;
