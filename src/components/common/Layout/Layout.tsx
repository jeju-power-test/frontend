import Head from 'next/head';
import { ReactNode } from 'react';
import * as Style from './Layout.style';

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Head>
        <title>제주력 테스트</title>
      </Head>
      <Style.Layout>{children}</Style.Layout>
    </>
  );
}

export default Layout;
