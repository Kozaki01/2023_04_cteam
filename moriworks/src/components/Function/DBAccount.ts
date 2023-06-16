import { isSet } from 'util/types';
import { supabase } from '../../../client/supabase';

export const signupAccount = async (
  email: string,
  password: string,
  repassword: string,
  select_user: number
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

    /* アカウント作成のエラー処理 */
    // 値がすべてnullの時
    if (email == '' && password == '' && repassword == '')
      throw new Error('値が入っていません。');

    // メールのvalidation
    const email_validate = /[a-zA-Z0-9]+@[a-zA-Z0-9]]+/;
    if (email.match(email_validate) == null)
      throw new Error('メールの形式が一致していません。');
    // メールのUniqueかどうか調べる
    var mail_flg = false;
    await uniqueEmail(email).then((result) => {
      if (result) {
        mail_flg = true;
      }
    });
    if (!mail_flg) throw new Error('既に存在するメールアドレスです。');

    // passwordのvalidationチェック
    const pass_validate = /^[a-zA-Z0-9]{8,24}$/;
    if (password.match(pass_validate) == null)
      throw new Error('パスワードの形式が一致していません');

    // パスワードと確認用が一致しているか
    if (password != repassword)
      throw new Error('パスワードが一致していません。');

    // アカウント作成部分
    const { error } = await supabase.from('account').insert({
      email: email,
      hashed_password: hashedPassword,
      salt: salt,
      select_user: select_user, // select_user 1:ユーザー 2:企業 3:管理者
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

export const loginAccount = async (
  email: string,
  password: string,
  select_user: number
) => {
  try {
    // email,select_userの一致したデータのsalt, hashed_password取得
    const { data, error } = await supabase
      .from('account')
      .select('salt, hashed_password')
      .eq('select_user', select_user)
      .eq('email', email);

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

// Uniqueなメールアドレスか調べる unique:true
export const uniqueEmail = async (email: string) => {
  try {
    // メールが一致するデータ取得
    const { data, error } = await supabase
      .from('account')
      .select()
      .eq('email', email);

    if (data?.length == 0) {
      // dataがない時　true
      return true;
    } else {
      // それ以外 false
      return false;
    }
  } catch (error) {
    console.error(error);
    return { error };
  }
};

//データベースを表示

export const displayAccount = async (
  email: string,
  password: string,
  select_user: number
) => {
  try {
    // email,select_userの一致したデータのsalt, hashed_password取得
    const { data, error } = await supabase.from('account').select('*');

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
