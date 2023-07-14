import React, { useEffect, useState } from 'react';
import styles from './CreateProfile.module.scss';
import { useRouter } from 'next/router';
import Title from '../Title';
import Btn from './../index/TopButton/TopButton';
import MultiSelect from './MultiSelect';
import { createProfile } from '../Function/DBProfile';
import { fetch_id } from '../Function/DBProfile';
import { createDesiredArea } from '../Function/DBDesiredArea';
import { createDesiredJobType } from './../Function/DBDesiredJobType';
import { checkProfileExistence } from '../Function/DBProfile';

type btnItem = {
  title: string;
  font: string;
  wide: number;
  height: number;
  bgcolor: string;
  color: string;
  border: string;
  shadow: string;
  hovercolor: string;
  hover: string;
};

interface props {
  account_id: number;
}

const CreateProfile: React.FC<props> = ({ account_id }) => {
  const router = useRouter();
  const [name, setName] = useState(String); // 名前
  const [birthday, setBirthday] = useState(new Date()); // 生年月日
  const [address, setAddress] = useState(String); // 住所
  const [area, setArea] = useState([]); // 希望地域
  const [job, setJob] = useState([]); // 希望業種
  const [pr, setPr] = useState(String); // 自己PR

  // リダイレクトの処理
  React.useEffect(() => {
    const checkProfile = async () => {
      const account_id = localStorage.getItem('account_id');
      console.log('account_id: ' + account_id);
      if (account_id) {
        // プロフィールが作成されているか調べる
        const profileExists = await checkProfileExistence(Number(account_id));
        console.log('profileExists： ' + profileExists);
        // プロフィールが作成されているとき プロフィール作成ページに飛ぶ
        if (profileExists) {
          router.push('/profile_users');
        }
      }
    };
    checkProfile();
  }, []);

  // ユーザTopに遷移
  const moveTop = async () => {
    router.push('/top_users').then((_) => {});
  };

  /**
   * input値の取得
   */
  // nameの取得
  const changeName = (e: any) => {
    setName(e.target.value);
  };
  // 生年月日の取得
  const changeBirthday = (e: any) => {
    setBirthday(e.target.value);
  };
  // 住所の取得
  const changeAddress = (e: any) => {
    setAddress(e.target.value);
  };
  // 希望地域の取得
  const changeArea = async (selected: any, selectaction: any) => {
    const { action } = selectaction;
    // console.log(`action ${action}`);
    if (action === 'clear') {
    } else if (action === 'select-option') {
    } else if (action === 'remove-value') {
      console.log('remove');
    }
    setArea(selected);
  };
  // 希望職種の取得
  const changeJob = async (selected: any, selectaction: any) => {
    const { action } = selectaction;
    // console.log(`action ${action}`);
    if (action === 'clear') {
    } else if (action === 'select-option') {
    } else if (action === 'remove-value') {
      console.log('remove');
    }
    setJob(selected);
  };
  // 自己ｐｒの取得
  const changePr = (e: any) => {
    setPr(e.target.value);
  };

  // プロフィール作成処理
  const doCreate = async () => {
    const result = await createProfile(account_id, name, birthday, address, pr);
    // 作成出来た時
    if (!result.error) {
      const profile_id = await fetch_id(account_id);
      if (!profile_id.error) {
        area.forEach((item) => {
          createDesiredArea(item['value'], profile_id);
        });
        console.log('createArea');
        job.forEach((item) => {
          createDesiredJobType(item['value'], profile_id);
        });
        console.log('createJob');
      }
    }
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
      hovercolor: 'E5E5E5',
      hover: '',
    }, //戻る
    {
      title: '作成する',
      bgcolor: '',
      font: 'Kosugi Maru',
      wide: 170,
      height: 60,
      color: 'black',
      border: '',
      shadow: '',
      hovercolor: 'E5E5E5',
      hover: '',
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
          <Title text={'アカウント作成'} />
          <table className={styles.table1}>
            <tbody>
              <tr className={styles.tr1}>
                <td className={`${styles.td_name1} ${styles.td1}`}>名前</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_name2}>
                  <input
                    type="text"
                    placeholder="山田太郎"
                    className={styles.text}
                    onChange={changeName}
                  />
                </td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_birth1} ${styles.td1}`}>
                  生年月日
                </td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_birth2}>
                  <label className={styles.date}>
                    <input
                      type="date"
                      className={styles.input_birth}
                      onChange={changeBirthday}
                    />
                  </label>
                </td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_add1} ${styles.td1}`}>住所</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_add2}>
                  <input
                    type="text"
                    placeholder="岩手県盛岡市中央通り3丁目"
                    className={styles.text}
                    onChange={changeAddress}
                  />
                </td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_area1} ${styles.td1}`}>希望地域</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_area2}>
                  {/* 希望地域のコンポーネント */}
                  <MultiSelect isArea={true} changeEvent={changeArea} />
                </td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_job1} ${styles.td1}`}>希望業種</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_job2}>
                  {/* 希望業種のコンポーネント */}
                  <MultiSelect isArea={false} changeEvent={changeJob} />
                </td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_pr1} ${styles.td1}`}>自己PR</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_pr2}>
                  <textarea
                    placeholder="例:私の強みは〇〇です。"
                    className={styles.text_area}
                    onChange={changePr}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.flex_btn}>
            <div onClick={moveTop}>
              <Btn {...btn1Props} />
            </div>
            <span className={styles.space}></span>
            <div onClick={doCreate}>
              <Btn {...btn2props} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
