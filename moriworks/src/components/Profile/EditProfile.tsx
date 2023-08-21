import React, { useEffect, useState } from 'react';
import styles from './EditProfile.module.scss';
import { useRouter } from 'next/router';
import Title from '../Title';
import Btn from '../index/TopButton/TopButton';
import MultiSelect from './MultiSelect';
import { fetch_id, getProfile, editProfile } from '../Function/DBProfile';
import {
  createDesiredArea,
  editDesiredArea,
  deleteDesiredArea,
} from '../Function/DBDesiredArea';
import {
  createDesiredJobType,
  editDesiredJobType,
  deleteDesiredJob,
} from '../Function/DBDesiredJobType';

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
  const [address, setAddress] = useState(String); // 住所
  const [area, setArea] = useState<string[]>([]); // 希望地域
  const [job, setJob] = useState<string[]>([]); // 希望業種
  const default_area: any = []; // 希望地域のデフォルト表示
  const default_job: any = []; // 希望業種のデフォルト表示
  const [area_delflg, setAreaflg] = useState(false); // 希望地域を消したフラグ
  const [job_delflg, setJobflg] = useState(false); // 希望業種を消したフラグ
  const [pr, setPr] = useState(String); // 自己PR

  // プロフィールの値を取得
  const fetchData = async () => {
    try {
      const accountId = localStorage.getItem('account_id');
      setAccountID(Number(accountId));
      if (accountId) {
        const result = await getProfile(Number(accountId));
        if ('error' in result) {
          console.error('Error getting profile:', result.error);
        } else {
          setAddress(result.address);
          setPr(result.self_publicity);
          result.desired_area.forEach((item: any) => {
            default_area.push({
              value: Number(`${item['area']['area_id']}`),
              label: `${item['area']['area_name']}`,
            });
          });
          setArea(default_area);
          result.desired_job_type.forEach((item: any) => {
            default_job.push({
              value: Number(`${item['job_type']['job_type_id']}`),
              label: `${item['job_type']['job_type_name']}`,
            });
          });
          setJob(default_job);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  // アカウントID取得の処理
  React.useEffect(() => {
    fetchData();
  }, []);

  // ユーザTopに遷移
  const moveBack = async () => {
    router.push('/profile_users').then((_) => {});
  };

  /**
   * Change時の値の取得
   */
  // 住所の取得
  const changeAddress = (e: any) => {
    setAddress(e.target.value);
  };
  // 希望地域の取得
  const changeArea = async (selected: any, selectaction: any) => {
    const { action } = selectaction;
    if (action === 'clear') {
      setAreaflg(true);
    } else if (action === 'select-option') {
    } else if (action === 'remove-value') {
      setAreaflg(true);
    }
    setArea(selected);
  };
  // 希望職種の取得
  const changeJob = async (selected: any, selectaction: any) => {
    const { action } = selectaction;
    if (action === 'clear') {
      setJobflg(true);
    } else if (action === 'select-option') {
    } else if (action === 'remove-value') {
      setJobflg(true);
    }
    setJob(selected);
  };
  // 自己ｐｒの取得
  const changePr = (e: any) => {
    setPr(e.target.value);
  };

  // プロフィール編集
  const doEdit = async () => {
    const result = await editProfile(account_id, address, pr);
    // 作成出来た時
    if (!result.error) {
      const profile_id = await fetch_id(account_id);
      if (!profile_id.error) {
        if (area_delflg) {
          // プロフィールIDが一致する行を削除
          deleteDesiredArea(profile_id);
          area.forEach((item: any) => {
            createDesiredArea(item['value'], profile_id);
          });
        } else {
          area.forEach((item: any) => {
            editDesiredArea(item['value'], profile_id);
          });
        }
        if (job_delflg) {
          // プロフィールIDが一致する行を削除
          deleteDesiredJob(profile_id);
          job.forEach((item: any) => {
            createDesiredJobType(item['value'], profile_id);
          });
        } else {
          job.forEach((item: any) => {
            editDesiredJobType(item['value'], profile_id);
          });
        }
      }
      alert('編集が完了しました。');
      router.push('/profile_users').then((_) => {});
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
      title: '編集',
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
                    defaultValue={default_area}
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
                    defaultValue={default_job}
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
            <div onClick={moveBack}>
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
