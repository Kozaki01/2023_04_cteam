import React from 'react';
import styles from './user.module.scss';
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
  id: number;
}

const user: React.FC<props> = ({ id }) => {
  const router = useRouter();
  const btns: btnItem[] = [
    {
      title: '戻る',
      bgcolor: '',
      font: 'MS Gothic',
      wide: 130,
      height: 50,
      color: 'black',
      border: '',
      shadow: '',
    }, //戻る
    {
      title: '編集する',
      bgcolor: '',
      font: 'MS Gothic',
      wide: 150,
      height: 50,
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
          <table className={styles.table1}>
            <tbody>
              <tr className={styles.tr1}>
                <td className={`${styles.td_name1} ${styles.td1}`}>名前</td>
                <td className={styles.colon}>:</td>
                <td className={styles.td_name2}></td>
              </tr>
              <tr className={styles.tr1}>
                <td className={`${styles.td_birth1} ${styles.td1}`}>生年月日</td>
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
