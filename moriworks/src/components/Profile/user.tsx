import React, { useEffect, useState } from 'react';
import styles from './user.module.scss';
import { useRouter } from 'next/router';
import Title from '../Title';
import Btn from './../index/TopButton/TopButton';
import { getProfile, checkProfileExistence } from '../Function/DBProfile';

type btnItem = {
  title: string;
  bgcolor: string;
  font: string;
  wide: number;
  height: number;
  color: string;
  border: string;
  shadow: string;
  hovercolor: string;
  hover: string;
};

interface props {}

const user: React.FC<props> = ({}) => {
  const router = useRouter();
  const [account_id, setAccountID] = useState(Number);
  const [UserProfile, setProfile] = useState(Object);
  // リダイレクトの処理
  React.useEffect(() => {
    const checkProfile = async () => {
      const accountId = localStorage.getItem('account_id');
      console.log('account_id: ' + accountId);
      if (accountId) {
        setAccountID(Number(accountId));
        // プロフィールが作成されているか調べる
        const profileExists = await checkProfileExistence(account_id);
        console.log('profileExists： ' + profileExists);
        // プロフィールが作成されていないとき プロフィール作成ページに飛ぶ
        if (profileExists) {
          router.push('/profile_create_users');
        }
      }
    };
    const Profile = async () => {
      const data = getProfile(account_id);
      // useStateでプロフィールを入れる
      setProfile(data);
    };
    checkProfile();
    Profile();
  }, []);

  // ユーザTopに遷移
  const moveTop = async () => {
    router.push('/top_users').then((_) => {});
  };
  // ユーザ編集画面に遷移
  const moveEdit = async () => {
    router.push('/edit_users').then((_) => {});
  };

  // data取得
  console.log('UserProfile');
  console.log(UserProfile);

  const btns: btnItem[] = [
    {
      title: '戻る',
      bgcolor: '',
      font: 'Kosugi Maru',
      wide: 170,
      height: 60,
      color: 'black',
      border: '',
      shadow: '',
      hover: '',
      hovercolor: '#E5E5E5',
    }, //戻る
    {
      title: '編集する',
      bgcolor: '',
      font: 'Kosugi Maru',
      wide: 170,
      height: 60,
      color: 'black',
      border: '',
      shadow: '',
      hover: '',
      hovercolor: '#E5E5E5',
    }, //編集する
  ];
  const btn1Props: btnItem = {
    ...btns[0],
  };
  const btn2props: btnItem = {
    ...btns[1],
  };

  return (
    <>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <Title text={'My Profile'} />
          <table className={styles.table1}>
            <tbody>
              <tr className={styles.tr1}>
                <td className={`${styles.td_name1} ${styles.td1}`}>名前</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_name2}></td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_birth1} ${styles.td1}`}>
                  生年月日
                </td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_birth2}></td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_add1} ${styles.td1}`}>住所</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_add2}></td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_area1} ${styles.td1}`}>希望地域</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_area2}></td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_job1} ${styles.td1}`}>希望業種</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_job2}></td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_pr1} ${styles.td1}`}>自己PR</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_pr2}></td>
              </tr>
            </tbody>
          </table>
          <div className={styles.flex_btn}>
            <div onClick={moveTop}>
              <Btn {...btn1Props} />
            </div>
            <span className={styles.space}></span>
            <div onClick={moveEdit}>
              <Btn {...btn2props} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default user;
