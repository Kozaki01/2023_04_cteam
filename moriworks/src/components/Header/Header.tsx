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
  border: string;
  shadow: string;
};

const Header: React.FC<props> = ({ type }) => {
  const router = useRouter();
  const btns: btnItem[] = [
    {
      title: 'ログアウト',
      bgcolor: '',
      font: 'Kosugi Maru',
      wide: 170,
      height: 70,
      color: 'black',
      border: '',
      shadow: '',
    }, //ログアウト
  ];
  const btn1Props: btnItem = {
    ...btns[0],
  };
  // Topに遷移
  const moveTop = async () => {
    router.push('/').then((_) => {});
  };
  // ログアウトを押したとき
  const moveLogout = async () => {
    // ログイン状態の破棄
    localStorage.removeItem('account_id');
    router.push('/').then((_) => {});
  };

  return (
    <>
      {type ? (
        // ログインしていないとき
        <div className={styles.header_div}>
          <div className={styles.div_2}>
            <div className={styles.div_3}>
              <div className={styles.column}>
                <div className={styles.div_4} onClick={moveTop}>
                  moriworks
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ログイン済み表示
        <div className={styles.header_div2}>
          <div className={styles.div_4} onClick={moveTop}>
            moriworks
          </div>
          <div className={styles.logout} onClick={moveLogout}>
            <Btn {...btn1Props} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
