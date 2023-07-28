import React, { useState, useEffect } from 'react';
import MultiSelect from "@/components/Profile/MultiSelect";
import styles from './userlist_company.module.scss';
import { useRouter } from 'next/router';
import Btn from "@/components/index/TopButton/TopButton";
import { GoSearch } from "@/components/Function/DBCompany";
import { get_job_type_id } from "@/components/Function/DBOpenings_industry";


interface Props {}

type btnItem = {
  title: string;
  font: string;
  wide: number;
  height: number;
  bgcolor: string;
  color: string;
  border: string;
  shadow: string;
  hovercolor: string;
  hover: string;
};

const Index: React.FC<Props> = () => {
  const [area, setArea] = useState<string[]>([]); // 希望地域
  const [job, setJob] = useState<string[]>([]); // 希望業種
  const [name, setName] = useState<string>(''); // 住所
  const [searchResult, setSearchResult] = useState<any[] | null>(null);
  const [initialLoad, setInitialLoad] = useState(true); // 初回読み込みフラグ

  const router = useRouter();

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const changeArea = async (selected: any, selectaction: any) => {
    const { action } = selectaction;
    // console.log(`action ${action}`);
    if (action === 'clear') {
      // 何もしない
    } else if (action === 'select-option') {
      // 何もしない
    } else if (action === 'remove-value') {
      console.log('remove');
    }
    // 選択されたオブジェクトからvalueプロパティの値だけを取り出す
    const selectedValues = selected.map((item: any) => item.value);
    setArea(selectedValues);
  };

  const changeJob = async (selected: any, selectaction: any) => {
    const { action } = selectaction;
    // console.log(`action ${action}`);
    if (action === 'clear') {
      // 何もしない
    } else if (action === 'select-option') {
      // 何もしない
    } else if (action === 'remove-value') {
      console.log('remove');
    }
    // 選択されたオブジェクトからvalueプロパティの値だけを取り出す
    const selectedValues = selected.map((item: any) => item.value);
    setJob(selectedValues);
  };

  // ページ読み込み時にローカルストレージの値があれば、それを反映させる
  useEffect(() => {
    const savedArea = localStorage.getItem('area');
    const savedJob = localStorage.getItem('job');
    const savedName = localStorage.getItem('name');

    console.log('Saved 希望地域:', savedArea);
    console.log('Saved 希望業種:', savedJob);
    console.log('Saved 住所:', savedName);

    // ローカルストレージの値があれば、それを反映させる
    if (savedArea) {
      setArea(JSON.parse(savedArea));
    }
    if (savedJob) {
      setJob(JSON.parse(savedJob));
    }
    if (savedName) {
      setName(savedName);
    }

    setInitialLoad(false); // 初回読み込みフラグをfalseに設定
  }, []);

  const doSearch = async () => {
    // 選択した値をlocalStorageに保存
    localStorage.setItem('area', JSON.stringify(area));
    localStorage.setItem('job', JSON.stringify(job));
    localStorage.setItem('name', name);

    // 検索結果を取得し、searchResultにセットする
    let openingsIdArray: any = null;
    if (name && area.length > 0) {
      openingsIdArray = await GoSearch(name, area);
    } else if (name) {
      openingsIdArray = await GoSearch(name, []);
    } else if (area.length > 0) {
      openingsIdArray = await GoSearch('', area);
    }

    if (openingsIdArray !== null) {
      let jobTypeIdsArray: any;
      if (job) {
        jobTypeIdsArray = await get_job_type_id(
          openingsIdArray.map((item: any) => item.openings_id),
          job
        );
      } else {
        jobTypeIdsArray = await get_job_type_id(openingsIdArray.map((item: any) => item.openings_id), []);
      }

      if (jobTypeIdsArray.length === 0) {
        setSearchResult(null);
      } else {
        setSearchResult(jobTypeIdsArray);
      }
    } else {
      setSearchResult(null);
    }
  };

  const btnprops: btnItem = {
    title: '検索',
    bgcolor: '',
    font: 'Kosugi Maru',
    wide: 170,
    height: 40,
    color: 'black',
    border: 'solid',
    shadow: '',
    hovercolor: 'aqua',
    hover: '',
  };

  return (
    <>
      <div>
        <table>
          <tbody>
          <tr className={styles.tr1}>
            <td className={`${styles.td_area1} ${styles.td1}`}>希望地域</td>
            <td className={styles.colon}>:</td>
            <td className={styles.td_area2}>
              {/* 希望地域のコンポーネント */}
              <MultiSelect isArea={true} changeEvent={changeArea} />
            </td>
          </tr>
          <tr>
            <td className={styles.td_add2}>
              <input
                type="text"
                placeholder="〇〇株式会社"
                className={styles.text}
                onChange={changeName}
              />
            </td>
          </tr>
          <tr className={styles.tr1}>
            <td className={`${styles.td_job1} ${styles.td1}`}>希望業種</td>
            <td className={styles.colon}>:</td>
            <td className={styles.td_job2}>
              {/* 希望業種のコンポーネント */}
              <MultiSelect isArea={false} changeEvent={changeJob} />
            </td>
          </tr>
          </tbody>
        </table>
        <div onClick={doSearch}>
          <Btn {...btnprops} />
        </div>
      </div>

      {/* 検索結果の表示 */}
      <div>
        {searchResult !== null ? (
          searchResult.map((item: any, index: number) => (
            <div key={index}>
              {/* openings_idと対応するjob_type_idを表示 */}
              <p>
                openings_id: {item.openings_id}, job_type_id: {Array.isArray(item.job_type_id) ? item.job_type_id.join(', ') : item.job_type_id}
              </p>
              {/* 他の情報も同様に表示 */}
            </div>
          ))
        ) : (
          // 初回読み込み時は「ここに検索結果が表示されます。」と表示する
          initialLoad ? <p>ここに検索結果が表示されます。</p> : <p>企業が存在しませんでした。</p>
        )}
      </div>
    </>
  );
};

export default Index;
