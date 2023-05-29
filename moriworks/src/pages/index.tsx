import React from 'react';
import PageComponent from '../components/index/index';
import Header from '../components/index/Header/Header';

const Index = () => {
  return (
    <>
      <Header type={true} />
      <PageComponent />
      <Title text={'My Profile'} />
    </>
  );
};

export default Index;
