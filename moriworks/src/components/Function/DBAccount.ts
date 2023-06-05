import { supabase } from '../../../client/supabase';

export const createAccount = async (
  email: string,
  password: string,
  repassword: string,
  user_flg: number
) => {
  try {
    // ハッシュ化の作業
    const crypto = require('crypto');
    const salt = crypto.randomBytes(4).toString('hex');
    const saltedPassword = password + salt;
    const hashedPassword = crypto
      .createHash('sha256')
      .update(saltedPassword)
      .digest('hex');

    // アカウント作成のエラー時
    if (email == '' && password == '' && repassword == '')
      throw new Error('値が入っていません。');
    if (password != repassword)
      throw new Error('パスワードが一致していません。');
    // アカウント作成部分
    const { error } = await supabase.from('account').insert({
      email: email,
      hashed_password: hashedPassword,
      salt: salt,
      select_user: user_flg, // select_user 1:ユーザー 2:企業 3:管理者
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

export const selectAccount = async (
  email: string,
  password: string,
  user_flg: number
) => {
  try {
    // email,select_userの一致
    const { data, error } = await supabase
      .from('account')
      .select('salt, hashed_password')
      .eq('select_user', user_flg)
      .eq('email', email);

    // パスワードの一致
    console.log(data);
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
