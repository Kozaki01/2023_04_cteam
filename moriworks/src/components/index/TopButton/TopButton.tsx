import React, {ReactNode} from 'react';
import styles from "./TopHeader.module.scss";
import Image from "next/image";



export interface BtnProps {
  title: string;
  font:string;
  wide:number;
  height:number;
  bgcolor:string;
  color:string;

}


const TopHeader:React.FC<BtnProps> = ({title,font,wide,height,bgcolor,color}) => {

  return (
    <>
   <div
      data-cy={'Header-Btn-root'} className={styles.Btn_root}  data-bgcolor={bgcolor} data-font={font} data-wide={wide} data-height={height}
      style={{background: bgcolor, fontFamily:font, width:wide, height:height, color:color}}
    >
      <div  data-bgcolor={bgcolor} className={styles.Btn_title}
      data-el={"h2_small"} data-en={title === "Submit"} >
        {title}
      </div>
    </div>
    </>

  );
};

export default TopHeader;
