import React from 'react';
import PageComponent from './../components/index/index';
import Header from './../components/Header/Header';
import Signup from '@/components/Signup/Signup';

const sigunup = () => {
  var user_flg = 1;
  // if (isUser) user_flg = 1;
  // else if (isCompany) user_flg = 2;
  // else if (isAdmin) user_flg = 3;
  return (
    <>
      <Header type={false} />
      <PageComponent />
      <Signup select_user={user_flg} />
    </>
  );
};

export default sigunup;
