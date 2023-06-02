import React, { ReactNode } from 'react';
import styles from './Signup.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Btn from './index/TopButton/TopButton';

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
  isUser: boolean;
}

const Signup: React.FC<props> = ({ isUser }) => {
  const router = useRouter();
  const btns: btnItem[] = [
    {
      title: 'Sign Up',
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
  const RedirectToCreateAccountHandler = () => {
    router.push('/signin').then((_) => {});
  };
  const RedirectToLoginHandler = () => {
    router.push('/signup_users').then((_) => {});
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
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={styles.input}
        />
        <input
          type="password"
          name="rePassword"
          id="rePassword"
          placeholder="rePassword"
          className={styles.input}
        />
        {/* Sign up */}
        {isUser ? (
          // user側の処理 遷移先の変更
          <div className={styles.btn}>
            <Btn {...btn1Props} />
          </div>
        ) : (
          // company側の処理 遷移先の変更
          <div className={styles.btn}>
            <Btn {...btn1Props} />
          </div>
        )}
        <div className={styles.or}>
          <div className={styles.line}></div>
          <p>OR</p>
          <div className={styles.line}></div>
        </div>
        <p className={styles.login}>
          Have an account?{' '}
          <a href="/login" className={styles.a1}>
            Log in
          </a>
        </p>
      </div>
    </>
  );
};

export default Signup;
