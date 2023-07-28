// DBOpenings_industory.tsx

import { supabase } from '../../../client/supabase';
export const get_job_type_id = async (openings_id: number[], job: string[] | null) => {
  try {
    // openings_idとjobを参照して該当するデータを取得
    let { data: openingsIndustry, error } = await supabase
      .from('openings_industry')
      .select('openings_id, job_type_id')
      .in('openings_id', openings_id);

    if (error) {
      throw new Error(error.message);
    }

    // jobがnullまたは空の場合、全てのopenings_idを返す
    if (!job || job.length === 0) {
      return openingsIndustry;
    }

    // openingsIndustryがnullの場合、空の配列を返す
    if (!openingsIndustry) {
      return [];
    }

    // openings_idが重複しないようにフィルタリングする
    const filteredOpeningsIndustry = openingsIndustry.reduce((acc: any[], curr: any) => {
      if (!acc.some((item) => item.openings_id === curr.openings_id)) {
        acc.push(curr);
      }
      return acc;
    }, []);

    // 結果を返す
    return filteredOpeningsIndustry;
  } catch (error) {
    console.error('get_job_type_id Error:', error);
    return null; // エラーが発生した場合は null を返す
  }
};
