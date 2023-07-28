import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import styles from './MultiSelect.module.scss';
import { getArea } from '../Function/DBArea';
import { getJobType } from '../Function/DBJobType';

interface props {
  isArea: boolean;
  changeEvent: any;
  defaultValue: any;
}

const MultiSelect: React.FC<props> = ({
  isArea,
  changeEvent,
  defaultValue,
}) => {
  const options: any = [];

  // optionsの中身を取得
  const getOptions = async () => {
    if (isArea) {
      // 地域一覧を取得
      const areaResult = await getArea();
      // エラーじゃないとき
      if (!areaResult.error) {
        // areaに取得した配列を入れる
        const area = areaResult.data;
        // 空じゃないとき
        if (area != undefined) {
          // 配列に値を追加
          area.forEach((element) => {
            options.push({ value: element.area_id, label: element.area_name });
          });
        }
      }
    } else {
      // 業種一覧を取得
      const JobResult = await getJobType();
      // エラーじゃないとき
      if (!JobResult.error) {
        // jobに取得した配列を入れる
        const job = JobResult.data;
        // 空じゃないとき
        if (job != undefined) {
          // 配列に値を追加
          job.forEach((element) => {
            options.push({
              value: element.job_type_id,
              label: element.job_type_name,
            });
          });
        }
      }
    }
  };
  getOptions();

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
        onChange={changeEvent}
        defaultValue={defaultValue}
        placeholder="希望の地域を選択してください。"
      />
    </div>
  );
};

export default MultiSelect;
