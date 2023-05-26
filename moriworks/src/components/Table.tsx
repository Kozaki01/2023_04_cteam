import React, { ReactNode } from 'react';
import styles from './Table.module.scss';
import { useRouter } from 'next/router';

interface props {
  id: number;
  isCompany: boolean;
}

const Title: React.FC<props> = ({ id, isCompany }) => {
  return (
    <>
      {isCompany ? (
        <div className={styles.div1}>
          <table className={styles.table1}>
            <thead className={styles.thead1}>
              <tr className={styles.tr1}>
                <th className={`${styles.th1} ${styles.name_th}`}>名前</th>
                <th className={`${styles.th1} ${styles.birth_th}`}>生年月日</th>
                <th className={`${styles.th1} ${styles.area_th}`}>希望地域</th>
                <th className={`${styles.th1} ${styles.job_th}`}>希望業種</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr1}>
                <td className={`${styles.td1} ${styles.name_col}`}>山田太郎</td>
                <td className={`${styles.td1} ${styles.birth_col}`}>
                  2002年5月18日
                </td>
                <td className={`${styles.td1} ${styles.area_col}`}>
                  ・関東&ensp;・東北&ensp;・北海道
                </td>
                <td className={`${styles.td1} ${styles.job_col}`}>
                  ・営業&ensp;・IT&ensp;・製造業&ensp;・小売業
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className={styles.div1}>
          <table className={styles.table1}>
            <thead className={styles.thead1}>
              <tr className={styles.tr1}>
                <th className={`${styles.th1} ${styles.name_th}`}>企業名</th>
                <th className={`${styles.th1} ${styles.birth_th}`}>地域</th>
                <th className={`${styles.th1} ${styles.area_th}`}>業種</th>
                <th className={`${styles.th1} ${styles.job_th}`}>
                  メールアドレス
                </th>
                <th className={`${styles.th1} ${styles.link_th}`}>
                  ホームページ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr1}>
                <td className={`${styles.td1} ${styles.name_col1}`}>
                  富士テクノソリューションズ
                </td>
                <td className={`${styles.td1} ${styles.area_col1}`}>東京都</td>
                <td className={`${styles.td1} ${styles.job_col1}`}>
                  ・営業&ensp;・IT&ensp;・製造業&ensp;・小売業
                </td>
                <td className={`${styles.td1} ${styles.mail_col1}`}>
                  test@test.com
                </td>
                <td className={`${styles.td1} ${styles.link_col1}`}>
                  <a href="https://www.fjtsc.co.jp/" className={styles.a1}>
                    https://www.fjtsc.co.jp/
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Title;
