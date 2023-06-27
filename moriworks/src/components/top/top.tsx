import React, { useState, useEffect } from 'react';
import HeroBtnPages from "../../components/HeroBtnPages/HeroBtnPages";
import styles from "../index/index.module.scss";
import { checkProfileExistence } from '../Function/DBProfile';

interface Props {}

const Index: React.FC<Props> = () => {
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    const checkProfile = async () => {
      const account_id = localStorage.getItem('account_id');
      console.log(account_id);
      if (account_id) {
        const profileExists = await checkProfileExistence(Number(account_id));
        setHasProfile(profileExists);
      }
    };

    checkProfile();
    console.log(hasProfile)
  }, []);

  return (
    <div className={styles.Index_root}>
      {hasProfile ? (
        <>
          <HeroBtnPages buttonName="プロフィール" imageSrc="/HeroBtnPages/Charco Send Email.png" redirectPath="/profile_users" background = "radial-gradient(50% 50% at 50% 50%, rgba(39, 221, 233, 0.82) 0%, rgba(255, 255, 255, 0) 100%)" />
          <HeroBtnPages buttonName="求人情報検索" imageSrc="/HeroBtnPages/Charco Directions.png" redirectPath="/company_list_users" background="radial-gradient(50% 50% at 50% 50%, rgba(103, 255, 118, 0.87) 0%, rgba(255, 255, 255, 0) 100%)" />
          <HeroBtnPages buttonName="エントリー済み" imageSrc="/HeroBtnPages/Charco Message Notification.png" redirectPath="enterd_users" background="radial-gradient(50% 50% at 50% 50%, rgba(105, 102, 255, 0.82) 0%, rgba(255, 255, 255, 0) 100%)" />
        </>
      ) : (
        <>
          <HeroBtnPages buttonName="プロフィール作成" imageSrc="/HeroBtnPages/Charco Mobile Life.png" redirectPath="/profile_create_users" background="radial-gradient(50% 50% at 50% 50%, rgba(255, 74, 74, 0.71) 0%, rgba(236, 92, 92, 0) 100%)" />
          <HeroBtnPages buttonName="求人情報検索" imageSrc="/HeroBtnPages/Charco Directions.png" redirectPath="/company_list_users" background="radial-gradient(50% 50% at 50% 50%, rgba(103, 255, 118, 0.87) 0%, rgba(255, 255, 255, 0) 100%)" />
          <HeroBtnPages buttonName="エントリー済み" imageSrc="/HeroBtnPages/Charco Message Notification.png" redirectPath="enterd_users" background="radial-gradient(50% 50% at 50% 50%, rgba(105, 102, 255, 0.82) 0%, rgba(255, 255, 255, 0) 100%)" />
        </>
      )}
    </div>
  );
};

export default Index;
