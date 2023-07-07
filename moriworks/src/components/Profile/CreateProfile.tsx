import React, { useEffect, useState } from 'react';
import styles from './CreateProfile.module.scss';
import { useRouter } from 'next/router';
import Title from '../Title';
import Btn from './../index/TopButton/TopButton';
import MultiSelect from './MultiSelect';

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
      hovercolor: 'E5E5E5',
      hover: '',
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
          <Title text={'My Profile'} />
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
                  ></input>
                </td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_birth1} ${styles.td1}`}>
                  生年月日
                </td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_birth2}>
                  <input type="date"></input>
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
                  ></input>
                </td>
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
                <td className={styles.td_pr2}>
                  <textarea
                    placeholder="例:私の強みは〇〇です。"
                    className={styles.text_area}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <p className={`${styles.td1} ${styles.padding_top}`}>名前</p>
            <div className={styles.text_width}>
              <input
                type="text"
                placeholder="山田太郎"
                className={styles.text}
              ></input>
            </div>

            <div className={`${styles.td2} ${styles.padding_top}`}>
              生年月日
            </div>
            <div className={styles.date_width}>
              <input type="date"></input>
            </div>

            <div className={`${styles.td1} ${styles.padding_top}`}>住所</div>
            <div className={styles.text_width}>
              <input
                type="text"
                placeholder="岩手県盛岡市中央通り3丁目"
                className={styles.text}
              ></input>
            </div>

            <div className={`${styles.td2} ${styles.padding_top}`}>
              希望業種
              {/* 希望業種のコンポーネント */}
              <MultiSelect isArea={false} />
            </div>

            <div className={`${styles.td2} ${styles.padding_top}`}>
              希望地域
              {/* 希望地域のコンポーネント */}
              <MultiSelect isArea={true} />
            </div>

            <div className={`${styles.td3} ${styles.padding_top}`}>自己PR</div>
            <div className={styles.textarea_size}>
              <textarea
                placeholder="例:私の強みは〇〇です。"
                className={styles.text_area}
              ></textarea>
            </div>
          </div>
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

export default CreateProfile;
