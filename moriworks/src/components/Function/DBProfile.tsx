import { supabase } from "../../../client/supabase";

export const checkProfileExistence = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('profile')
      .select()
      .eq('user_id', userId);

    if (error) {
      throw error;
    }

    return data.length > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
};
