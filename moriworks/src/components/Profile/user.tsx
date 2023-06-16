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

const Signup: React.FC<props> = ({ id }) => {
  const router = useRouter();
  const btns: btnItem[] = [
    {
      title: '戻る',
      bgcolor: '',
      font: 'MS Gothic',
      wide: 130,
      height: 50,
      color: 'black',
      border: '1px solid transparent',
      shadow: '',
    }, //戻る
    {
      title: '編集する',
      bgcolor: '',
      font: 'MS Gothic',
      wide: 150,
      height: 50,
      color: 'black',
      border: '1px solid transparent',
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
          <p>名前：</p>
          <Btn {...btns[0]} />
          <Btn {...btns[1]} />
        </div>
      </div>
    </>
  );
};

export default Signup;
