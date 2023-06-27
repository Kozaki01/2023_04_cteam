import { supabase } from '../../../client/supabase';

// プロフィールがあるかどうかの確認
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

// プロフィールの作成
export const createProfile = async (
  account_id: number,
  name_user: string,
  birthday: Date,
  address: string,
  self_publicity: string
) => {
  try {
    // Profileテーブルにデータを挿入
    const { data, error } = await supabase.from('profile').insert({
      account_id: account_id,
      name_user: name_user,
      birthday: birthday,
      address: address,
      self_publicity: self_publicity,
    });
    if (error) {
      throw error;
    }
    console.log('createProfile:', data);
    return data;
  } catch (error) {
    // エラーハンドリング
    console.error(error);
    return { error };
  }
};

// profile_idの取得
export const fetch_id = async (account_id: number) => {
  try {
    // アカウントIDが一致するデータを一個取得
    const { data, error } = await supabase
      .from('profile')
      .select('profile_id')
      .eq('account_id', account_id)
      .single();
    // エラーが発生したときcatchに移動
    if (error) {
      throw error;
    }
    // dataを返す
    console.log('fetch_id', data);
    return data;
  } catch (error) {
    // エラーハンドリング
    console.error(error);
    return { error };
  }
};

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

// 希望業種の登録
export const desired_job_type = async (
  job_type_id: Array<number>,
  profile_id: number
) => {
  try {
    const { data, error } = await supabase.from('desired_area').insert({
      area_id: job_type_id,
      profile_id: profile_id,
    });
    if (error) {
      throw error;
    } else {
      return { error: false };
    }
  } catch (error) {
    // エラーハンドリング
    console.error(error);
    return { error };
  }
};
