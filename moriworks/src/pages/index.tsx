import React from 'react';
import PageComponent from '../components/index/index';
import Header from '../components/Header/Header';
import Btn from "../components/Btn";
import Signin from '../components/index/SignIn/Signin';


const Index = () => {
  return (
    <>
      <Header type={false} />
      <PageComponent />
    </>
  );
};

export default Index;
