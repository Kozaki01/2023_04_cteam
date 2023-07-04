import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import styles from "./MultiSelect.module.scss";

interface props {
  isArea: boolean
}

const MultiSelect: React.FC<props> = ({isArea}) => {
  const [warna, setWarna] = useState([]);
  const [ukuran, setUkuran] = useState([]);
  const options = [{ value: 'biru', label: 'Biru' }];
  if (isArea) {
    // 地域一覧を取得してoptionに追加する
    
  }
  

  const handleWarnaChange = async (selected: any, selectaction: any) => {
    const { action } = selectaction;
    // console.log(`action ${action}`);
    if (action === 'clear') {
    } else if (action === 'select-option') {
    } else if (action === 'remove-value') {
      console.log('remove');
    }
    setWarna(selected);
  };

  const handleUkuranChange = async (selected: any, selectaction: any) => {
    // const { action } = selectaction;
    setUkuran(selected);
  };

  return (
    <div>
      <Select
        id="selectWarna"
        instanceId="selectWarna"
        isMulti
        name="colors"
        className={styles.select}
        classNamePrefix="select"
        options={options}
        onChange={handleWarnaChange}
        placeholder="希望の地域を選択してください。"
      />
    </div>
  );
};

export default MultiSelect;
