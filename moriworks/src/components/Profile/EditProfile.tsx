import React, { useEffect, useState } from 'react';
import styles from './EditProfile.module.scss';
import { useRouter } from 'next/router';
import Title from '../Title';
import Btn from '../index/TopButton/TopButton';
import MultiSelect from './MultiSelect';
import {
  fetch_id,
  checkProfileExistence,
  getProfile,
  editProfile,
} from '../Function/DBProfile';
import { editDesiredArea } from '../Function/DBDesiredArea';
import { editDesiredJobType } from '../Function/DBDesiredJobType';

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

interface props {}

const EditProfile: React.FC<props> = ({}) => {
  const router = useRouter();
  const [account_id, setAccountID] = useState(Number); // アカウントID
  const [name, setName] = useState(String); // 名前
  const [birthday, setBirthday] = useState(new Date()); // 生年月日
  const [address, setAddress] = useState(String); // 住所
  const [area, setArea] = useState<string[]>([]); // 希望地域
  const [job, setJob] = useState<string[]>([]); // 希望業種
  const _area: any = [];
  const _job: any = [];
  const [pr, setPr] = useState(String); // 自己PR

  // プロフィールが作成されているか調べてリダイレクト
  const checkProfile = async () => {
    const accountId = localStorage.getItem('account_id');
    console.log('account_id: ' + accountId);
    if (accountId) {
      // アカウントID取得
      setAccountID(Number(accountId));
      // プロフィールが作成されているか調べる
      const profileExists = await checkProfileExistence(Number(account_id));
      console.log('profileExists： ' + profileExists);
      // プロフィールが作成されていないとき プロフィール作成ページに飛ぶ
      // if (profileExists) {
      //   router.push('/profile_create_users');
      // }
    }
  };

  // プロフィールの値を取得
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
          result.desired_area.forEach((item: any) => {
            _area.push({
              value: Number(`${item['area']['area_id']}`),
              label: `${item['area']['area_name']}`,
            });
          });
          console.log('_area', _area);
          result.desired_job_type.forEach((item: any) => {
            _job.push({
              value: Number(`${item['job_type']['job_type_id']}`),
              label: `${item['job_type']['job_type_name']}`,
            });
          });
          console.log('_job', _job);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  // アカウントID取得の処理
  React.useEffect(() => {
    checkProfile();
    fetchData();
  }, []);

  // ユーザTopに遷移
  const moveTop = async () => {
    router.push('/top_users').then((_) => {});
  };

  /**
   * Change時の値の取得
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
    console.log(selected);
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
    console.log(selected);
    setJob(selected);
  };
  // 自己ｐｒの取得
  const changePr = (e: any) => {
    setPr(e.target.value);
  };

  // プロフィール編集
  const doEdit = async () => {
    const result = await editProfile(account_id, name, birthday, address, pr);
    // 作成出来た時
    if (!result.error) {
      const profile_id = await fetch_id(account_id);
      if (!profile_id.error) {
        console.log(area);
        area.forEach((item: any) => {
          editDesiredArea(item['value'], profile_id);
        });
        console.log('editArea');
        console.log(job);
        job.forEach((item: any) => {
          editDesiredJobType(item['value'], profile_id);
        });
        console.log('editJob');
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
          <Title text={'アカウント編集'} />
          <table className={styles.table1}>
            <tbody>
              <tr className={styles.tr1}>
                <td className={`${styles.td_add1} ${styles.td1}`}>住所</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_add2}>
                  <input
                    type="text"
                    placeholder="岩手県盛岡市中央通り3丁目"
                    className={styles.text}
                    onChange={changeAddress}
                    value={address}
                  />
                </td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_area1} ${styles.td1}`}>希望地域</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_area2}>
                  {/* 希望地域のコンポーネント */}
                  <MultiSelect
                    isArea={true}
                    changeEvent={changeArea}
                    defaultValue={_area}
                  />
                </td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_job1} ${styles.td1}`}>希望業種</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_job2}>
                  <MultiSelect
                    isArea={false}
                    changeEvent={changeJob}
                    defaultValue={_job}
                  />
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
                    value={pr}
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
            <div onClick={doEdit}>
              <Btn {...btn2props} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
