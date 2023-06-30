import { supabase } from '../../../client/supabase';

// 希望地域の登録
export const createDesiredArea = async (
  area_id: Array<number>,
  profile_id: number
) => {
  try {
    // 希望地域にデータを登録
    for (const element of area_id) {
      const { error } = await supabase.from('desired_area').insert({
        area_id: element,
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
