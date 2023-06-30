import React from 'react';
import PageComponent from '../components/Profile/CreateProfile';
import Header from '../components/Header/Header';

const Index = () => {
  return (
    <>
      <Header type={false} />
      <PageComponent account_id={1}/>
    </>
  );
};

export default Index;