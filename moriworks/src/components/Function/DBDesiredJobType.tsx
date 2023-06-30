import { supabase } from '../../../client/supabase';

// 希望業種の登録
export const createDesiredJobType = async (
  job_type_id: Array<number>,
  profile_id: number
) => {
  try {
    // 希望業種にデータを複数行追加
    for (const element of job_type_id) {
      const { error } = await supabase.from('desired_area').insert({
        job_type_id: element,
        profile_id: profile_id,
      });
      // エラー時
      if (error) {
        throw error;
      }
    }
    return { error: false };
  } catch (error) {
    // エラーハンドリング
    console.error(error);
    return { error };
  }
};
