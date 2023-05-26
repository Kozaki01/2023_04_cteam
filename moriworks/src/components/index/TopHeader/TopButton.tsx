import React, {ReactNode} from 'react';
import styles from "./TopHeader.module.scss";
import Image from "next/image";



export interface BtnProps {
  title: string;
  weight: 'regular' | 'light' | 'bold';
  border: string;
  font:string;
  wide:string;
  bgcolor:string;
  color:string;

}


const TopHeader:React.FC<BtnProps> = ({title,weight,border,font,wide,bgcolor,color}) => {

  return (
    <>
   <div
      data-cy={'Header-Btn-root'} className={styles.Btn_root} data-border={border}
      style={{background: border}}
    >
      <div data-weight={weight} data-border={border} className={styles.Btn_title}
      data-el={"h2_small"} data-en={title === "Submit"}>
        {title}
      </div>
    </div>
    </>

  );
};

export default TopHeader;
