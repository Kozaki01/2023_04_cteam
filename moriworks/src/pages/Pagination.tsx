import React from 'react';
import PageComponent from './../components/index/index';
import Header from './../components/Header/Header';
import Pagination from '@/components/Pagination/Pagination';

const sigunup = () => {
  var user_flg = 1;
  // if (isUser) user_flg = 1;
  // else if (isCompany) user_flg = 2;
  return (
    <>
      <Header type={false} />
      <PageComponent />
      <Pagination  />
    </>
  );
};

export default sigunup;
