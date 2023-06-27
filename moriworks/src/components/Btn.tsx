import React from "react";
import { createAccount } from "./Function/DBAccount";

interface Props {
  // propsの型を指定する必要があります
}

const Btn: React.FC<Props> = () => {
  const create = () => {
    createAccount();
  };

  return (
    <button onClick={create} >
      ここをクリックするとデータベースが追加されます
    </button>
  );
};

export default Btn;
