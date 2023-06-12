import React from 'react';
import PageComponent from '../components/Profile/user';
import Header from '../components/Header/Header';

const Index = () => {
  return (
    <>
      <Header type={false} />
      <PageComponent id={1} />
    </>
  );
};

export default Index;
