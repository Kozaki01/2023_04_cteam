import React from 'react';
import PageComponent from '../components/index/SignIn/Signin';
import Header from './../components/Header/Header';

const sigunin = () => {
  var user_flg = 1;

  return (
    <>
      <Header type={false} />
      <PageComponent select_user={user_flg} />
    </>
  );
};

export default sigunin;