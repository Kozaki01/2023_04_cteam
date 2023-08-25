import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div>
      <h1>404 - このページは表示できません</h1>
      <p>まだ実装していないページです。</p>
      <Link href="/">
        <button>ホームページへ</button>
      </Link>
    </div>
  );
};

export default Custom404;
