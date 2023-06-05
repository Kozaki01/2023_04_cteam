import React from 'react';
import PageComponent from '../components/index/index';
import Header from '../components/Header/Header';
import Signin from '../components/index/SignIn/Signin';


const Index = () => {
  return (
    <>
      <Header type={false} />
      {/* <PageComponent /> */}

      {/* 追加分 */}
      <Signin type={false} />
    </>
  );
};

export default Index;
