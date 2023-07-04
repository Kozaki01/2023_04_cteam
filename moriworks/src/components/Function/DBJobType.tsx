import { supabase } from '../../../client/supabase';

// 業種一覧の取得
export const getJobType = async () => {
  try {
    // 業種取得
    const { data, error } = await supabase.from('job_type').select();

    if (error) {
      throw error;
    }
    if (data && data.length > 0) {
      // console.log(data);
      return { data };
    } else {
      throw new Error('アカウントが見つかりません。');
    }
  } catch (error) {
    console.error(error);
    return { error };
  }
};
