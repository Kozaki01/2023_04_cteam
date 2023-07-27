import React from 'react';
import PageComponent from '../components/top/top_users';
import Header from '../components/Header/Header';
import Btn from '../components/Btn';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  React.useEffect(() => {
    const checkLocalStorage = async () => {
      const accountId = localStorage.getItem('account_id');
      if (!accountId || accountId.trim() === '') {
        await router.push('/');
      }
    };

    checkLocalStorage();
  }, []);

  return (
    <>
      <Header type={false} />
      <PageComponent />
    </>
  );
};

export default Index;
