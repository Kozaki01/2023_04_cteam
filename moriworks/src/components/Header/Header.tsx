import React, { ReactNode } from 'react';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';

interface props {
  type: boolean;
}
const Header: React.FC<props> = ({ type }) => {
  const router = useRouter();
  // router.push{"/create-account"}
  // router.push{"/reset-password"}
  // router.push{"/login"}
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
            <button>トップ</button>
          </div>
          <div className={styles.logout}>
            <button>ログアウト</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
