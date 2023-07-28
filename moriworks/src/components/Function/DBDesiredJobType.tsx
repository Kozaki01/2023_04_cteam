import { supabase } from '../../../client/supabase';

// 希望業種の登録
export const createDesiredJobType = async (
  job_type_id: number,
  profile_id: number
) => {
  try {
    // 希望業種にデータを複数行追加
    const { error } = await supabase.from('desired_job_type').insert({
      job_type_id: job_type_id,
      profile_id: profile_id,
    });
    // エラー時
    if (error) {
      throw error;
    }
    return { error: false };
  } catch (error) {
    // エラーハンドリング
    console.error(error);
    return { error };
  }
};

// 希望業種の登録
export const editDesiredJobType = async (
  job_type_id: number,
  profile_id: number
) => {
  try {
    // 希望業種にデータを複数行追加
    const { error } = await supabase.from('desired_job_type').upsert(
      {
        job_type_id: job_type_id,
        profile_id: profile_id,
      },
      { onConflict: 'job_type_id,profile_id' }
    );
    // エラー時
    if (error) {
      throw error;
    }
    return { error };
  } catch (error) {
    // エラーハンドリング
    console.error(error);
    return { error };
  }
};
