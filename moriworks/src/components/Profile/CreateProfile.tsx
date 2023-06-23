import React, { useEffect, useState } from 'react';
import styles from './CreateProfile.module.scss';
import { useRouter } from 'next/router';
import Title from '../Title';
import Btn from './../index/TopButton/TopButton';

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
  account_id: number;
}

const user: React.FC<props> = ({ account_id }) => {
  const router = useRouter();
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
          <table>
            <tbody>
              <tr><td><p className={styles.td_name1}>名前</p></td></tr>
              <tr><td><input type="text" ></input></td></tr>

              <tr><td><div className={styles.td_name1}>生年月日</div></td></tr>
              {/* <tr><td>生年月日のコンポーネント</td></tr> */}

              <tr><td><div className={styles.td_name1}>住所</div></td></tr>
              <tr><td><input type="text" ></input></td></tr>

              <tr><td><div className={styles.td_name1}>希望業種</div></td></tr>
              {/* <tr><td>希望業種のコンポーネント</td></tr> */}

              <tr><td><div className={styles.td_name1}>希望地域</div></td></tr>
              {/* <tr><td>希望地域のコンポーネント</td></tr> */}

              <tr><td><div className={styles.td_name1}>自己PR</div></td></tr>
              <tr><td><textarea></textarea></td></tr> 
            </tbody>
          </table>
          <div className={styles.flex_btn}>
            <Btn {...btn1Props} />
            <span className={styles.space}></span>
            <Btn {...btn2props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default user;