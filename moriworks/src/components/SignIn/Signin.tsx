import React, { ReactNode } from 'react';
import styles from './Signin.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Btn from '../index/TopButton/TopButton';
import { useEffect, useState } from 'react';
// supabase
import { supabase } from '../utils/supabase';

type btnItem = {
  title: string;
  bgcolor: string;
  font: string;
  wide: number;
  height: number;
  color: string;
  border: string;
  shadow: string;
};

interface props {
  type: boolean;
}
  // ログインの関数
  const doLogin =  async () => {
    // supabaseで用意されているログインの関数
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw new Error(error.message)
    console.log(data)
  }

const SignIn: React.FC<props> = ({ type }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const btns: btnItem[] = [
    {
      title: 'Sign In',
      bgcolor: '#0095F6',
      font: 'Roboto',
      wide: 484.51,
      height: 58.3,
      color: 'white',
      border: '1px solid transparent',
      shadow: '',
    }, //トップ
  ];
  const btn1Props: btnItem = {
    ...btns[0],
  };

  const RedirectToLoginHandler = () => {
    router.push('/top_users').then((_) => {});
  };
  
  return (
    <>
      <div className={styles.div1}>
        <h1 className={styles.h1}>Moriworks</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.btn} onClick={()=>{doLogin();}}>
            <Btn {...btn1Props} />
        </div>


      </div>
    </>
  );

};

export default SignIn;
