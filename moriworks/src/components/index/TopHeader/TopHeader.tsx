import React, {ReactNode} from 'react';
import styles from "./TopHeader.module.scss";
import Image from "next/image";
import {useRouter} from "next/router";
import house from '/public/house.png';


// interface props{
//   type:void
// }

//const TopHeader:React.FC<props> = ({type}) => {

const TopHeader:React.FC = () => {
    const router = useRouter()
  const RedirectToCreateAccountHandler = () => {
    router.push("/create-account").then(_ => {})
  }

  return (
    <>
    <div className={styles.HeroBtn_root} onClick={RedirectToCreateAccountHandler}>
      <Image
        src={house} alt={""} className={styles.HeroBtn_img}
        width={280} height={430}  
        />      
        <h2 className={styles.HeroBtn_title} data-el={"h2_small"}>Top</h2>
        </div>
    </>

  );
};

export default TopHeader;
