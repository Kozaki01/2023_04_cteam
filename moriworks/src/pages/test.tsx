import React from 'react';
import PageComponent from '../components/index/test';
import Header from '../components/Header/Header';

const Index = () => {
  return (
    <>
      <Header type={false} />
      <PageComponent />
    </>
  );
};

export default Index;
