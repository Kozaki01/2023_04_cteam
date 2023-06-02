import React, { ReactNode } from 'react';
import styles from './Title.module.scss';
import { useRouter } from 'next/router';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <>
      <div className={styles.title_div}>
        <h1 className={styles.title_h1}>{text}</h1>
      </div>
    </>
  );
};

export default Title;
