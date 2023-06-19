import React, { ReactNode } from 'react';
import styles from "./HeroBtnPages.module.scss"
import Image from "next/image"
import { useRouter } from "next/router"

interface Props {
  buttonName: string;
  imageSrc: string;
  redirectPath: string;
  background?: string;
}

const HeroBtn: React.FC<Props> = ({ buttonName, imageSrc, redirectPath, background }) => {
  const router = useRouter();

  const redirectToHandler = () => {
    router.push(redirectPath).then(_ => {});
  };

  const rootStyle = {
    background: background || "none"
  };

  return (
    <>
      <div className={styles.HeroBtn_root} style={rootStyle} onClick={redirectToHandler}>
        <h2 className={styles.HeroBtn_title} data-el={"h2_small"}>{buttonName}</h2>
        <Image
          src={imageSrc} alt={""} className={styles.HeroBtn_img}
          width={246} height={331}
        />
      </div>
    </>
  );
};

export default HeroBtn;
