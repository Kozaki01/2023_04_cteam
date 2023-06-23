import React from 'react';
import PageComponent from '../components/Profile/user';
import Header from '../components/Header/Header';
import { useRouter } from 'next/router';
import { checkProfileExistence } from '@/components/Function/DBProfile';

const Index = () => {
  // リダイレクトの処理
  const router = useRouter();

  React.useEffect(() => {
    const checkProfile = async () => {
      const account_id = localStorage.getItem('account_id');
      console.log(account_id);
      if (account_id) {
        // プロフィールが作成されているか調べる
        const profileExists = await checkProfileExistence(Number(account_id));
        console.log('profileExists： ' + profileExists);
        // プロフィールが作成されていないとき プロフィール作成ページに飛ぶ
        if (!profileExists) {
          router.push('/profile_create_users');
        }
      }
    };
    checkProfile();
  }, []);
  return (
    <>
      <Header type={false} />
      <PageComponent account_id={1} />
    </>
  );
};

export default Index;
