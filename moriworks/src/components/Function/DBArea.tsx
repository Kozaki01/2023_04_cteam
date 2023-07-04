import { supabase } from '../../../client/supabase';

// エリア一覧の取得
export const getArea = async () => {
  try {
    // エリア取得
    const { data, error } = await supabase.from('area').select();
    
    if (error) {
      throw error
    }
    if (data && data.length > 0) {
      // console.log(data);
      return { data };
    } else {
      throw new Error('アカウントが見つかりません。');
    }
  } catch (error) {
    console.error(error);
    return {error};
  }
}