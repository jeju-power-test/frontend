import Head from 'next/head';
import { PropsWithChildren, ReactNode } from 'react';
import * as Style from './Layout.style';

interface ILayoutProps {
  type: 'default' | 'fill';
  children: ReactNode;
}

function Layout(props: PropsWithChildren<ILayoutProps>) {
  const { children, ...rest } = props;

  return (
    <>
      <Head>
        <title>제주력 테스트</title>
      </Head>
      <Style.Layout {...rest}>{children}</Style.Layout>
    </>
  );
}

Layout.defaultProps = {
  type: 'default',
};

export default Layout;
