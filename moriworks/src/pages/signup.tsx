import React from 'react';
import PageComponent from './../components/index/Signup/Signup';
import Header from './../components/Header/Header';

const sigunup = () => {
  var user_flg = 1;
  // if (isUser) user_flg = 1;
  // else if (isCompany) user_flg = 2;
  return (
    <>
      <Header type={true} />
      <PageComponent select_user={user_flg} />
    </>
  );
};

export default sigunup;
