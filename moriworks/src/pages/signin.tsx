import React from 'react';
import PageComponent from './../components/index/index';
import Header from './../components/Header/Header';
import Signin from '../components/index/SignIn/Signin';

const sigunin = () => {
  var user_flg = 1;
  // if (isUser) user_flg = 1;
  // else if (isCompany) user_flg = 2;
  return (
    <>
      <Header type={false} />
      {/* <PageComponent /> */}
      <Signin select_user={user_flg} />
    </>
  );
};

export default sigunin;