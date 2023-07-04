import React, { ReactNode, useState } from 'react';
import styles from './Signin.module.scss';
import { useRouter } from 'next/router';
import Btn from '../../index/TopButton/TopButton';
import {fetch_id, loginAccount} from '../../Function/DBAccount';
import stylesup from "../Signup/Signup.module.scss";
import { brotliCompress } from 'zlib';

type btnItem = {
  title: string;
  font: string;
  wide: number;
  height: number;
  bgcolor: string;
  color: string;
  border: string;
  shadow: string;
  hovercolor:string
  hover:string;
};

interface props {
  select_user: number;
}

const Signin: React.FC<props> = ({ select_user }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const btns: btnItem[] = [
    {
      title: 'サインイン',
      bgcolor: '#0095F6',
      font: 'Kosugi Maru',
      wide: 484.51,
      height: 58.3,
      color: 'white',
      border: '1px solid transparent',
      hovercolor:"#256f9f",
      shadow:'',
      hover:'',
    }, //トップ
  ];
  const btn1Props: btnItem = {
    ...btns[0],
  };

  // 値の変更 メール、パスワード 、確認用パスワード
  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  }
  const ChangePass = (e: any) => {
    setPassword(e.target.value);
  };

  // signup押下時　アカウント作成呼び出し
  const doAction = async () => {
    if (email != '' && password != '') {
      //loginAccountでエラー
      loginAccount(email, password,  select_user);
      console.log(email,password,select_user);
      const accountIdResult = await fetch_id(email);
      if (!accountIdResult.error) {
        const account_id = accountIdResult.account_id;
        // sessionにaccount_idを登録する処理
        // ここでは仮にlocalStorageに登録していますが、必要に応じて適切な処理を使用してください。
        localStorage.removeItem('account_id');
        localStorage.setItem('account_id', account_id);
      } else {
        // fetch_idエラー処理
        console.error(accountIdResult.error);
      }
      router.push("/top_users").then(_ => {});
    }
  };

  return (
    <>
      <div className={styles.div1}>
        <h1 className={styles.h1}>Moriworks</h1>
        <p className={stylesup.label}>
          メールアドレスを入力してください
        </p>
        <input
        type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={stylesup.input}
          onChange={onChangeEmail}
          required
        />
        <p className={stylesup.label}>
          パスワードを入力してください
        </p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className={stylesup.input}
          onChange={ChangePass}
          required
        />
        {/* Sign in */}
        <div className={styles.btn} onClick={doAction} > 
          <Btn {...btn1Props} />
        </div>
            {/* - or - */}
            <div className={styles.or}>
          <div className={styles.line}></div>
          <span className={styles.or}>または</span>
          <div className={styles.line}></div>
        </div>
        <p className={styles.login}>
          アカウントをお持ちではないですか?{' '}
          <a href="/signup" className={styles.a1}>
            アカウント登録
          </a>
        </p>
      </div>
      
      
    </>
  );
};

export default Signin;
