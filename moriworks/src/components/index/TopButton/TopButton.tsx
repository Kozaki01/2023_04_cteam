import React, { ReactNode ,useState} from 'react';
import styles from './TopButton.module.scss';
import Image from 'next/image';

export interface BtnProps {
  title: string;
  font: string;
  wide: number;
  height: number;
  bgcolor: string;
  color: string;
  border: string;
  shadow: string;
  hovercolor:string
  hover:string;
}

const TopHeader: React.FC<BtnProps> = ({
  title,
  font,
  wide,
  height,
  bgcolor,
  color,
  border,
  shadow,
  hovercolor,
  hover
}) => {
  const [isHovered,setIsHoverd]=useState(false);

  const handleMouseEnter=()=>{
    setIsHoverd(true);
  }
  const handleMouseLeave=()=>{
    setIsHoverd(false);
  }
  return (
    <>
      <div
        data-cy={'Header-Btn-root'}
        className={styles.Btn_root}
        data-bgcolor={bgcolor}
        data-font={font}
        data-wide={wide}
        data-height={height}
        data-border={border}
        data-shadow={shadow}
        data-hover={hover}
        hover-color={hovercolor}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          //backgroundを付けるとホバーがつかない
          background: isHovered?hovercolor : bgcolor,
          fontFamily: font,
          width: wide,
          height: height,
          color: color,
          border: border,
          boxShadow: shadow,
        }}
        
      >
        <div
          // data-bgcolor={bgcolor}
          className={styles.Btn_title}
          data-el={'h2_small'}
          data-en={title === 'Submit'}
        >
          {title}
        </div>
      </div>
    </>
  );
};

export default TopHeader;