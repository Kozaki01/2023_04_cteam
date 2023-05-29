import React from 'react';
import PageComponent from '../components/index/index';
import Header from '../components/index/Header/Header';
import Title from '../components/Title';

const Index = () => {
  return (
    <>
      <Header type />
      <PageComponent />
      <Title text={'My Profile'} />
    </>
  );
};

export default Index;
