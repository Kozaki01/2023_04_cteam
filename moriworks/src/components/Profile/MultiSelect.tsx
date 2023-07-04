import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import styles from "./MultiSelect.module.scss";
import { getArea } from '../Function/DBArea';
import { getJobType } from '../Function/DBJobType';
import { error } from 'console';

interface props {
  isArea: boolean
}

const MultiSelect: React.FC<props> = ({isArea}) => {
  const [warna, setWarna] = useState([]);
  const [ukuran, setUkuran] = useState([]);
  const options:any = [];

  // optionsの中身を取得
  const getOptions = async() => {
    if (isArea) {
      // 地域一覧を取得
      const areaResult = await getArea()
      // エラーじゃないとき
      if (!areaResult.error) {
        // areaに取得した配列を入れる
        const area = areaResult.data;
        // 空じゃないとき
        if (area != undefined) {
          // 配列に値を追加
          area.forEach(element => {
            options.push({"value":element.area_id, "label":element.area_name })
          });
        }
      }
    } else {
      // 業種一覧を取得
      const JobResult = await getJobType()
      // エラーじゃないとき
      if (!JobResult.error) {
        // jobに取得した配列を入れる
        const job = JobResult.data;
        // 空じゃないとき
        if (job != undefined) {
          // 配列に値を追加
          job.forEach(element => {
            options.push({"value":element.job_type_id, "label":element.job_type_name })
          });
        }
      }
    }
  }
  getOptions()

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
