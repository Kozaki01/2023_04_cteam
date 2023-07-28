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
  const [account_id, setAccountID] = useState(Number); // アカウントID
  const [name, setName] = useState(String); // 名前
  const [birthday, setBirthday] = useState(String); // 生年月日
  const [address, setAddress] = useState(String); // 住所
  const [area, setArea] = useState<string[]>([]); // 希望地域
  const [job, setJob] = useState<string[]>([]); // 希望業種
  const [pr, setPr] = useState(String); // 自己PR
  const [UserProfile, setProfile] = useState(Object);

  React.useEffect(() => {
    // プロフィールが作成されているか調べリダイレクト処理する
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
    // プロフィール取得
    const fetchData = async () => {
      try {
        const accountId = localStorage.getItem('account_id');
        console.log(accountId);
        if (accountId) {
          const result = await getProfile(Number(accountId));
          console.log(result);
          if ('error' in result) {
            console.error('Error getting profile:', result.error);
          } else {
            setName(result.name_user);
            setBirthday(result.birthday);
            setAddress(result.address);
            setPr(result.self_publicity);
            const _area: string[] = [];
            result.desired_area.forEach((item: any) => {
              console.log(item['area']['area_name']);
              _area.push(`・${item['area']['area_name']}`);
              setArea(_area);
            });
            const _job: string[] = [];
            result.desired_job_type.forEach((item: any) => {
              console.log(item['job_type']['job_type_name']);
              _job.push(`・${item['job_type']['job_type_name']}`);
              setJob(_job);
            });
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    checkProfile();
    fetchData();
  }, []);

  // ユーザTopに遷移
  const moveTop = async () => {
    router.push('/top_users').then((_) => {});
  };
  // ユーザ編集画面に遷移
  const moveEdit = async () => {
    router.push('/edit_users').then((_) => {});
  };

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
          <Title text={'マイプロフィール'} />
          <table className={styles.table1}>
            <tbody>
              <tr className={styles.tr1}>
                <td className={`${styles.td_name1} ${styles.td1}`}>名前</td>
                <td className={styles.colon}>:</td>
                <td className={styles.text}>&emsp;{name}</td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_birth1} ${styles.td1}`}>
                  生年月日
                </td>
                <td className={styles.colon}>:</td>
                <td className={styles.text}>&emsp;{birthday}</td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_add1} ${styles.td1}`}>住所</td>
                <td className={styles.colon}>:</td>
                <td className={styles.text}>&emsp;{address}</td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_area1} ${styles.td1}`}>希望地域</td>
                <td className={styles.colon}>:</td>
                <td className={styles.text}>&emsp;{area}</td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_job1} ${styles.td1}`}>希望業種</td>
                <td className={styles.colon}>:</td>
                <td className={styles.text}>&emsp;{job}</td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_pr1} ${styles.td1}`}>自己PR</td>
                <td className={styles.colon}>:</td>
                <td className={styles.text}>&emsp;{pr}</td>
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
