import { supabase } from '../../../client/supabase';

export const GoSearch = async (name: string, area: string[]) => {
  try {
    let { data: companies, error } = await supabase
      .from('company_info')
      .select('openings_id')
      .ilike('company_name', `%${name}%`) // 曖昧検索
      .in('area_id', area);

    if (error) {
      throw new Error(error.message);
    }

    // 検索結果の配列を返す
    return companies || null; // 空の場合は null を返す
  } catch (error) {
    console.error('GoSearch Error:', error);
    return null; // エラーが発生した場合は null を返す
  }
};

