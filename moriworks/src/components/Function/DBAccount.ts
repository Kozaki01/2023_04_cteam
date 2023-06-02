import { supabase } from "../../../client/supabase";

export const createAccount = async () => {
  try {
    const { error } = await supabase
      .from("account")
      .insert({
        account_id: 1234123412341234,
        email: "test@email.com",
        hashed_password: "hFps4#f2Mf3#A",
        salt: "fdmc",
        select_user: 2,
        delete_flg: false,
      });

    if (error) {
      throw error;
    }

    return { error: null };
  } catch (error) {
    // エラーハンドリング
    console.error(error);
    return { error };
  }
};
