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
            <div>
              <p className={styles.td1}>名前</p>
              <div className={styles.textwidth}><input type="text" placeholder='山田太郎' className={styles.text}></input></div>

              <div className={styles.td2}>生年月日</div>
              {/* <tr><td>生年月日のコンポーネント</td></tr> */}

              <div className={styles.td1}>住所</div>
              <div className={styles.textwidth}><input type="text" placeholder='岩手県盛岡市中央通り3丁目' className={styles.text}></input></div>

              <div className={styles.td2}>希望業種</div>
              {/* 希望業種のコンポーネント */}

              <div className={styles.td2}>希望地域</div>
              {/* 希望地域のコンポーネント */}

              <div className={styles.td3}>自己PR</div>
              <div className={styles.textareasize}><textarea placeholder='例:私の強みは〇〇です。' className={styles.textarea}></textarea></div>
            </div>
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