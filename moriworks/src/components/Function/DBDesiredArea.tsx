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

// 編集時の作業
export const editDesiredArea = async (area_id: number, profile_id: number) => {
  try {
    // 希望地域にデータを登録
    const { error } = await supabase.from('desired_area').upsert(
      {
        area_id: area_id,
        profile_id: profile_id,
      },
      { onConflict: 'area_id,profile_id' }
    );
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

// プロフィールIDが一致するデータを削除
export const deleteDesiredArea = async (profile_id: number) => {
  try {
    const { error } = await supabase
      .from('desired_area')
      .delete()
      .eq('profile_id', profile_id);
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
