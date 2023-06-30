import React, {ReactNode} from 'react';
import styles from "./HeroBtn.module.scss"
import Image from "next/image"
import {useRouter} from "next/router"

interface props{
  type:boolean
}
const HeroBtn:React.FC<props> = ({type}) => {
  const router = useRouter()
  // router.push{"/create-account"}
  // router.push{"/reset-password"}
  // router.push{"/login"}
  const RedirectToCreateAccountHandler = () => {
    router.push("/signup").then(_ => {})
  }
  const RedirectToLoginHandler = () => {
    router.push("/signin").then(_ => {})
  }
  return (
    <>
      {type ? (
        <div className={styles.HeroBtn_root} onClick={RedirectToCreateAccountHandler}>
          <h2 className={styles.HeroBtn_title}>アカウント作成</h2>
          <Image
            src={"/Charco Hi.png"} alt={""} className={styles.HeroBtn_img}
            width={280} height={430}
          />
        </div>
      ) : (
        <div className={styles.HeroBtn_root} onClick={RedirectToLoginHandler}>
          <h2 className={styles.HeroBtn_title}>ログイン</h2>
          <Image
            src={"/Charco High Five.png"} alt={""} className={styles.HeroBtn_img}
            width={280} height={430}
          />
        </div>
      )}
    </>

  );
};

export default HeroBtn;
