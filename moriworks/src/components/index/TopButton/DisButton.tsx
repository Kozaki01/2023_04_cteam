import React, {ReactNode} from 'react';
import styles from '../components/index/TopButton/TopButton.module.scss'; 
//他のディレクトリで使いたい場合は、下を直してください
import Btn from './TopButton';



type btnItem = {
  title: string;
  bgcolor: string;
  font:string;
  wide:number;
  height:number;
  color:string;
}

interface props {
  isEditMenu: boolean,
  cancelHandler?: () => void,
  submitHandler?: () => void,
}

const Header: React.FC<props> = ({isEditMenu, cancelHandler, submitHandler}) => {

  //textの中身
  let texts = ["トップ", "ログアウト","破棄して終了","保存して終了","戻る","削除","Go Search","エントリー","スカウト"]

  //cssの個別変更
  const btns: btnItem[] = [
    //title:texts内の表示する文字の配列 ,bgcolor:背景の色,font:フォントの変更:wide:ボタン幅の変更,height:ボタンの高さを変更,color:文字の色の変更
    //font使用可能 MS Gpthic ,serif,MS PGothic
    //https://fromkato.com/webdev/css/properties/font-family 他に気になるならこのサイトで探す
  
    {title: texts[0],   bgcolor: "",font:"MS Gothic",wide:130,height:50,color:"black"},//トップ
    {title: texts[1],   bgcolor: "",font:"MS Gothic",wide:130,height:50,color:"black"},//ログアウト
    {title: texts[2],   bgcolor: "",font:"MS Gothic",wide:160,height:50,color:"black"},//破棄して終了
    {title: texts[3],   bgcolor: "",font:"MS Gothic",wide:160,height:50,color:"black"},//保存して終了
    {title: texts[4],   bgcolor: "",font:"MS Gothic",wide:130,height:50,color:"black"},//戻る
    {title: texts[5],   bgcolor: "#EA5050",font:"MS Gothic",wide:130,height:50,color:"#FFFFFF"},//削除
    {title: texts[6],   bgcolor: "#D9EBFF",font:"MS PGothic",wide:130,height:50,color:"#007AFF"},//Go Search
    {title: texts[7],   bgcolor: "",font:"MS Gothic",wide:130,height:50,color:"black"},//エントリー
    {title: texts[8],   bgcolor: "",font:"MS Gothic",wide:130,height:50,color:"black"},//スカウト

  ];

  //ボタンの種類
  const btn1Props: btnItem = {
    ...btns[0]
  }
  const btn2Props: btnItem = {
    ...btns[1]
  }
  const btn3Props: btnItem = {
    ...btns[2]
  }
  const btn4Props: btnItem = {
    ...btns[3]
  }
  const btn5Props: btnItem = {
    ...btns[4]
  }
  const btn6Props: btnItem = {
    ...btns[5]
  }
  const btn7Props: btnItem = {
    ...btns[6]
  }
  const btn8Props: btnItem = {
    ...btns[7]
  }
  const btn9Props: btnItem = {
    ...btns[8]
  }

  console.log(btns.length)

  return (
    <div>
      {/* top */}

        <div>
          {/* 遷移先 */}
          <div onClick={cancelHandler}>
            {/* {}の中をボタンの種類に変更する */}
            <Btn {...btn1Props} />
          </div>
        </div>

        {/* ログアウト */}
        
        <div>
          {/* 遷移先 */}
          <div onClick={cancelHandler}>
            {/* {}の中をボタンの種類に変更する */}
            <Btn {...btn2Props} />
          </div>
        </div>

        {/* 破棄して終了 */}

        <div>
          {/* 遷移先 */}
          <div onClick={cancelHandler}>
            {/* {}の中をボタンの種類に変更する */}
            <Btn {...btn3Props} />
          </div>
        </div>

        {/* 保存して終了 */}


        <div>
          {/* 遷移先 */}
          <div onClick={cancelHandler}>
            {/* {}の中をボタンの種類に変更する */}
            <Btn {...btn4Props} />
          </div>
        </div>
        
        {/* 戻る */}


        <div>
          {/* 遷移先 */}
          <div onClick={cancelHandler}>
            {/* {}の中をボタンの種類に変更する */}
            <Btn {...btn5Props} />
          </div>
        </div>

        {/* 削除 */}


        <div>
          {/* 遷移先 */}
          <div onClick={cancelHandler}>
            {/* {}の中をボタンの種類に変更する */}
            <Btn {...btn6Props} />
          </div>
        </div>

        {/* Go Search */}


        <div>
          {/* 遷移先 */}
          <div onClick={cancelHandler}>
            {/* {}の中をボタンの種類に変更する */}
            <Btn {...btn7Props} />
          </div>
        </div>

         {/* エントリー */}

         <div>
          {/* 遷移先 */}
          <div onClick={cancelHandler}>
            {/* {}の中をボタンの種類に変更する */}
            <Btn {...btn8Props} />
          </div>
        </div>

         {/* スカウト */}
        
        <div>
          {/* 遷移先 */}
          <div onClick={cancelHandler}>
            {/* {}の中をボタンの種類に変更する */}
            <Btn {...btn9Props} />
          </div>
        </div>
    </div>
    
  );
};

export default Header