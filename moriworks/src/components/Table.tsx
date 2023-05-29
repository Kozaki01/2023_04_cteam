import React, { ReactNode } from 'react';
import styles from './Table.module.scss';
import { useRouter } from 'next/router';

interface Tableprops {
  id: number[];
  isCompany: boolean;
}

const Table: React.FC<Tableprops> = (props) => {
  if (props.id.length == 0) {
    return null;
  }

  return (
    <>
      {props.isCompany ? (
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
              {props.id.map((item) => {
                return (
                  <tr className={styles.tr1} key={item}>
                    <td className={`${styles.td1} ${styles.name_col}`}>
                      {/* 名前 */}
                      {item}
                    </td>
                    <td className={`${styles.td1} ${styles.birth_col}`}>
                      {/* 生年月日 */}
                      {item}
                    </td>
                    <td className={`${styles.td1} ${styles.area_col}`}>
                      {/* 希望地域 */}
                      {item}
                    </td>
                    <td className={`${styles.td1} ${styles.job_col}`}>
                      {/* 希望職種 */}
                      {item}
                    </td>
                  </tr>
                );
              })}
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
              {props.id.map((item) => {
                return (
                  <tr className={styles.tr1}>
                    <td className={`${styles.td1} ${styles.name_col1}`}>
                      {/* 企業名 */}
                      {item}
                    </td>
                    <td className={`${styles.td1} ${styles.area_col1}`}>
                      {/* 地域 */}
                      {item}
                    </td>
                    <td className={`${styles.td1} ${styles.job_col1}`}>
                      {/* 職種 */}
                      {item}
                    </td>
                    <td className={`${styles.td1} ${styles.mail_col1}`}>
                      {/* メールアドレス */}
                      {item}
                    </td>
                    <td className={`${styles.td1} ${styles.link_col1}`}>
                      <a href="" className={styles.a1}>
                        {/* リンク */}
                        {item}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
