import type { GetStaticProps, NextPage } from 'next';
import Home from '@components/Home/Home';
import { Layout } from '@components/common';
import useViewCount, { getViewCount } from '@hooks/query/useViewCount';
import { dehydrate, QueryClient } from 'react-query';

const HomePage: NextPage = () => {
  const viewCount = useViewCount();

  return (
    <Layout type="fill">
      <Home count={viewCount.count} />
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['view-count'], () => getViewCount());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
