
import React, { ReactNode, useState } from 'react';
import styles from './Signup.module.scss';
import { useRouter } from 'next/router';
import Btn from './../index/TopButton/TopButton';
import { signupAccount } from './..//Function/DBAccount';


const Signup: React.FC = ({ }) => {
  const hover=document.getElementById("hover");

  hover?.addEventListener("mouseover", function(  ) {
    // mouseover の対象を強調
    hover.style.color = "orange";
  }, false);

  return (
    <>
      
    </>
  );
};

export default Signup;
