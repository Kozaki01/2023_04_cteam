import React, {ReactNode} from 'react';
import styles from '../components/index/TopHeader/TopHeader.module.scss'; 
import Btn from '../components/index/TopHeader/TopButton';

type btnItem = {
  title: string;
  weight: 'regular' | 'light' | 'bold';
  // border: string;
  font:string;
  wide:string;
  bgcolor:string;
  color:string;
}

interface props {
  isEditMenu: boolean,
  cancelHandler?: () => void,
  submitHandler?: () => void,
}

const Header: React.FC<props> = ({isEditMenu, cancelHandler, submitHandler}) => {

  //textの中身
  let texts = ["トップ", "ログイン"]
  if (isEditMenu) texts = ["破棄して終了", "保存して終了"]

  //cssの個別変更
  const btns: btnItem[] = [
    {title: texts[0], weight: "regular", font:"Kosugi Maru",wide:"100",bgcolor:"red",color:"blue"},
    {title: texts[1], weight: "regular",font:"Kosugi Maru",wide:"10",bgcolor:"red",color:"white"},
  ];

  //ボタンの種類
  const btn1Props: btnItem = {
    ...btns[0]
  }
  const btn2Props: btnItem = {
    ...btns[1]
  }



  console.log(btns.length)

  return (
    <div className={styles.Header_root}>
        <div className={styles.Btn_box}>
          {/* 遷移先 */}
          <div onClick={cancelHandler}>
            {/* {}の中をボタンの種類に変更する */}
            <Btn {...btn2Props} />
          </div>
        </div>
    </div>
  );
};

export default Header