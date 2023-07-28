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
          <HeroBtnPages buttonName="利用者検索" imageSrc="/HeroBtnPages/Charco Directions.png" redirectPath="/company_list_users" background="radial-gradient(50% 50%at 50% 50%,  rgba(39, 163, 233, 0.82),  rgba(255, 255, 255, 0) 100% );" />
          <HeroBtnPages buttonName="送付済み" imageSrc="/HeroBtnPages/Charco Message Notification.png" redirectPath="enterd_users" background="radial-gradient(50% 50% at 50% 50%, rgba(105, 102, 255, 0.82) 0%, rgba(255, 255, 255, 0) 100%)" />
        </>
      ) : (
        <>
          <HeroBtnPages buttonName="利用者検索" imageSrc="/HeroBtnPages/Charco Notifications.png" redirectPath="/company_list_users" background="radial-gradient(50% 50%at 50% 50%,rgba(39, 163, 233, 0.82),rgba(255, 255, 255, 0));" />
          <HeroBtnPages buttonName="送付済み" imageSrc="/HeroBtnPages/Charco Message Notification.png" redirectPath="enterd_users" background="radial-gradient(50% 50% at 50% 50%, rgba(105, 102, 255, 0.82) 0%, rgba(255, 255, 255, 0) 100%)" />
        </>
      )}
    </div>
  );
};

export default Index;
