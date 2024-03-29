import { supabase } from '../../../client/supabase';

// サインアップ処理
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
    const email_validate = /[a-zA-Z0-9]+@[a-zA-Z0-9]+/;
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
    } else {
      return { error: false };
    }
  } catch (error) {
    // エラーハンドリング
    console.error(error);
    return { error };
  }
};

// アカウントが存在するか調べる 返り値:account_id
export const fetch_id = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from('account')
      .select('account_id')
      .eq('email', email);

    if (data && data.length > 0) {
      const account_id = data[0].account_id;
      return { account_id, error: null };
    } else {
      throw new Error('アカウントが見つかりません。');
    }
  } catch (error) {
    // エラーハンドリング
    console.error(error);
    return { error };
  }
};

// ログインの処理
export const loginAccount = async (
  email: string,
  password: string,
  select_user: number
) => {
  try {
    // 値がすべてnullの時
    if (email == '' && password == '') throw new Error('値が入っていません。');

    //パスワードバリデーション✓
    const pass_validate = /^[a-zA-Z0-9]{8,24}$/;
    if (password.match(pass_validate) == null)
      throw new Error('パスワードの形式が一致していません');
    //メールのバリデーション✔
    const email_validate = /[a-zA-Z0-9]+@[a-zA-Z0-9]+/;
    if (email.match(email_validate) == null)
      throw new Error('メールの形式が一致していません。');

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
