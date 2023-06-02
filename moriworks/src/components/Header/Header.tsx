import React, { ReactNode } from 'react';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import Btn from '../index/TopButton/TopButton';

interface props {
  type: boolean;
}

type btnItem = {
  title: string;
  bgcolor: string;
  font: string;
  wide: number;
  height: number;
  color: string;
};

const Header: React.FC<props> = ({ type }) => {
  const router = useRouter();
  const btns: btnItem[] = [
    {
      title: 'トップ',
      bgcolor: '',
      font: 'MS Gothic',
      wide: 130,
      height: 70,
      color: 'black',
    }, //トップ
    {
      title: 'ログアウト',
      bgcolor: '',
      font: 'MS Gothic',
      wide: 170,
      height: 70,
      color: 'black',
    }, //ログアウト
  ];
  const btn1Props: btnItem = {
    ...btns[0],
  };
  const btn2Props: btnItem = {
    ...btns[1],
  };

  return (
    <>
      {type ? (
        // ログインしていないとき
        <div className={styles.header_div}>
          <div className={styles.div_2}>
            <div className={styles.div_3}>
              <div className={styles.column}>
                <div className={styles.div_4}>moriworks</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ログイン済み表示
        <div className={styles.header_div2}>
          <div className={styles.div_4}>moriworks</div>
          <div className={styles.top}>
            <Btn {...btn1Props} />
          </div>
          <div className={styles.logout}>
            <Btn {...btn2Props} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
