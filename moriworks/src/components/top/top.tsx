import React, { useState, useEffect } from 'react';
import HeroBtnPages from "../../components/HeroBtnPages/HeroBtnPages";
import styles from "../index/index.module.scss";
import {checkProfileExistence} from '../Function/DBProfile';

interface Props {}

const Index: React.FC<Props> = () => {
  const [type, setType] = useState(true);

  useEffect(() => {
    const profileExists = checkProfileExistence(1);
    setType(profileExists);
  }, []);

  return (
    <div className={styles.Index_root}>
      {type ? (
        <>
          <HeroBtnPages buttonName="Create Profile" imageSrc="/HeroBtnPages/Charco Mobile Life.png" redirectPath="/profile_create_users" background="radial-gradient(50% 50% at 50% 50%, rgba(255, 74, 74, 0.71) 0%, rgba(236, 92, 92, 0) 100%)" />
          <HeroBtnPages buttonName="Browse Job Info" imageSrc="/HeroBtnPages/Charco Directions.png" redirectPath="/company_list_users" background="radial-gradient(50% 50% at 50% 50%, rgba(103, 255, 118, 0.87) 0%, rgba(255, 255, 255, 0) 100%)" />
          <HeroBtnPages buttonName="Entered" imageSrc="/HeroBtnPages/Charco Message Notification.png" redirectPath="enterd_users" background="radial-gradient(50% 50% at 50% 50%, rgba(105, 102, 255, 0.82) 0%, rgba(255, 255, 255, 0) 100%)" />
        </>
      ) : (
        <>
          <HeroBtnPages buttonName="User Profile" imageSrc="/HeroBtnPages/Charco Notifications.png" redirectPath="/profile_users" background="radial-gradient(50% 50% at 50% 50%, rgba(39, 221, 233, 0.82) 0%, rgba(255, 255, 255, 0) 100%)" />
          <HeroBtnPages buttonName="Browse Job Info" imageSrc="/HeroBtnPages/Charco Directions.png" redirectPath="/company_list_users" background="radial-gradient(50% 50% at 50% 50%, rgba(103, 255, 118, 0.87) 0%, rgba(255, 255, 255, 0) 100%)" />
          <HeroBtnPages buttonName="Entered" imageSrc="/HeroBtnPages/Charco Message Notification.png" redirectPath="enterd_users" background="radial-gradient(50% 50% at 50% 50%, rgba(105, 102, 255, 0.82) 0%, rgba(255, 255, 255, 0) 100%)" />
        </>
      )}
    </div>
  );
};

export default Index;
