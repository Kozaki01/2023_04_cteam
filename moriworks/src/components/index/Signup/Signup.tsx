import React, { ReactNode, useState } from 'react';
import styles from './Signup.module.scss';
import { useRouter } from 'next/router';
import Btn from '../../index/TopButton/TopButton';
import { signupAccount, fetch_id } from '../../Function/DBAccount';

type btnItem = {
  title: string;
  bgcolor: string;
  font: string;
  wide: number;
  height: number;
  color: string;
  border: string;
  shadow:string;
  hover:string;
  hovercolor:string;
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
  };
  const ChangePass = (e: any) => {
    setPassword(e.target.value);
  };
  const ChangeRepass = (e: any) => {
    setRepassword(e.target.value);
  };

  // signup押下時　アカウント作成呼び出し
  const doAction = async () => {
    if (email !== '' && password !== '' && repassword !== '') {
      const result = await signupAccount(email, password, repassword, select_user);
      if (!result.error) {
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
        router.push('/top_users').then((_) => {});
      } else {
        // signupAccountエラー処理
        console.error(result.error);
      }
    }
  };

  return (
    <>
      <div className={styles.div1}>
        <h1 className={styles.h1}>Moriworks</h1>
        <p className={styles.label}>
          メールアドレスを入力してください
        </p>
        <input type="email" name="email" id="email" placeholder="Email" className={styles.input} onChange={onChangeEmail} required />
        <p className={styles.label}>
          英数字を含めた8字以上のパスワードを入力してください
        </p>
        <input type="password" name="password" id="password" placeholder="Password" className={styles.input} onChange={ChangePass} required />
        <p className={styles.label}>
          確認のため、同じパスワードを入力してください
        </p>
        <input type="password" name="rePassword" id="rePassword" placeholder="rePassword" className={styles.input} onChange={ChangeRepass} required />
        {/* Sign up */}
        <div className={styles.btn} onClick={doAction}>
          <Btn {...btn1Props} />
        </div>
        {/* - or - */}
        <div className={styles.or}>
          <div className={styles.line}></div>
          <span className={styles.or}>または</span>
          <div className={styles.line}></div>
        </div>
        <p className={styles.login}>
          アカウントをお持ちですか?{' '}
          <a href="/signin" className={styles.a1}>
            ログイン
          </a>
        </p>
      </div>
    </>
  );
};

export default Signup;
