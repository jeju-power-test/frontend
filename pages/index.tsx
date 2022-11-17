import type { NextPage } from 'next';
import Home from '@components/Home/Home';
import { Layout } from '@components/common';

const HomePage: NextPage = () => {
  return (
    <Layout type="fill">
      <Home />
    </Layout>
  );
};

export default HomePage;
