import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

interface props {
  type: boolean;
}
const header: React.FC<props> = ({ type }) => {
  const router = useRouter();
  // router.push{"/create-account"}
  // router.push{"/reset-password"}
  // router.push{"/login"}
  const RedirectToCreateAccountHandler = () => {
    router.push('/login').then((_) => {});
  };
  return (
    <>
      {type ? <div className={styles.header_root} onClick></div> : <div></div>}
    </>
  );
};

export default header;
