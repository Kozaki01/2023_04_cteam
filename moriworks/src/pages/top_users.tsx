import React from 'react';
import PageComponent from '../components/top/top';
import Header from '../components/Header/Header';
// import checkProfileExistence from '../components/Function/DBProfile';
// import selectAccount from '../components/Function/DBAccount';
import Btn from "../components/Btn";

const Index = () => {

  return (
    <>
      <Header type={false} />
      <PageComponent />
      {/*<PageComponent type={checkProfileExistence(selectAccount())}/>*/}
  </>
);
};

export default Index;
