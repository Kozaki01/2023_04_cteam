import { supabase } from '../../../client/supabase';

// 希望地域の登録
export const createDesiredArea = async (
  area_id: number,
  profile_id: number
) => {
  try {
    // 希望地域にデータを登録
    const { error } = await supabase.from('desired_area').insert({
      area_id: area_id,
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