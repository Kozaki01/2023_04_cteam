import React, { ReactNode, useState } from 'react';
import styles from './Signup.module.scss';
import { useRouter } from 'next/router';
import Btn from './../index/TopButton/TopButton';
import { signupAccount } from './..//Function/DBAccount';

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
  select_user: number;
}

const Signup: React.FC<props> = ({ select_user }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
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

  // 値の変更 メール、パスワード 、確認用パスワード
  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const ChangePass = (e: any) => {
    setPassword(e.target.value);
  };
  const ChangeRepass = (e: any) => {
    setRepassword(e.target.value);
  };
  // signup押下時　アカウント作成呼び出し
  const doAction = () => {
    if (email != '' && password != '' && repassword != '') {
      signupAccount(email, password, repassword, select_user);
    }
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
          onChange={onChangeEmail}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={styles.input}
          onChange={ChangePass}
          required
        />
        <input
          type="password"
          name="rePassword"
          id="rePassword"
          placeholder="rePassword"
          className={styles.input}
          onChange={ChangeRepass}
          required
        />
        {/* Sign up */}
        <div className={styles.btn} onClick={doAction}>
          <Btn {...btn1Props} />
        </div>
        {/* - or - */}
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
