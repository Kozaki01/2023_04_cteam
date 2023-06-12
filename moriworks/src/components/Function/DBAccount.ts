import { isSet } from 'util/types';
import { supabase } from '../../../client/supabase';


console.log("aaa");

// export const loginAccount =async(
//     email: string,
//     password: string,
//     select_user: number,
// )=>{
    
// }

export const loginAccount = async (
  email: string,
  password: string,
  select_user: number,
) => {
  try {
    // email,select_userの一致したデータのsalt, hashed_password取得
    //ここでエラー
    
    const { data, error } = await supabase
      .from('account')
      .select('salt, hashed_password')
      .eq('select_user', select_user)
      .eq('email', email);
      console.log(select_user , email) ;
      
    // パスワードの一致
    if (data != null) {
      const crypto = require('crypto');
      const salt = data[0].salt;
      const saltedPassword = password + salt;
      const hashedPassword = crypto
        .createHash('sha256')
        .update(saltedPassword)
        .digest('hex');
      // ログインの処理
      if (data[0].hashed_password == hashedPassword) {
        console.log('isLogin!');
      }
    } else {
      throw error;
    }
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

// // // Uniqueなメールアドレスか調べる unique:true
// export const uniqueEmail = async (email: string) => {
//   try {
//     // メールが一致するデータ取得
//     const { data, error } = await supabase
//       .from('account')
//       .select()
//       .eq('email', email);

//     if (data?.length == 0) {
//       // dataがない時　true
//       return true;
//     } else {
//       // それ以外 false
//       return false;
//     }
//   } catch (error) {
//     console.error(error);
//     return { error };
//   }
// };
