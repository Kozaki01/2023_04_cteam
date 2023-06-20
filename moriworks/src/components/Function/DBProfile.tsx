import { supabase } from '../../../client/supabase';

// プロフィールが存在しているかどうか
export const checkProfileExistence = async (account_id: number) => {
  try {
    const { data, error } = await supabase
      .from('profile')
      .select('profile_id')
      .eq('account_id', account_id);

    if (error) {
      throw error;
    }

    console.log(data);
    return data.length > 0;
  } catch (error) {
    console.error('Error checking profile existence:', error);
    return false;
  }
};

// プロフィール取得
export const getProfile = async (account_id: number) => {
  try {
    // IDが一致するデータを取得
    const { data, error } = await supabase
      .from('profile')
      .select('profile_id')
      .eq('account_id', account_id);

    if (error) {
      throw error;
    }
    console.log(data);
    return data;
  } catch (error) {
    // エラーハンドリング
    console.error('Error get profile:', error);
    return { error };
  }
};
