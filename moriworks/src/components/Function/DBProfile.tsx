import { supabase } from '../../../client/supabase';

// プロフィールが存在しているかどうか
export const checkProfileExistence = async (account_id: number) => {
  try {
    const { data, error } = await supabase
      .from('profile')
      .select('profile_id')
      .eq('account_id', account_id);
    // エラーが発生したときcatchに移動
    if (error) {
      throw error;
    }
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
      .select(
        `
        name_user,
        birthday,
        address,
        desired_area {
          area {
            area_name,
          }
        },
        desired_job_type {
          job_type {
            job_type_name,
          }
        }
        self_publicity,
        `
      )
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
