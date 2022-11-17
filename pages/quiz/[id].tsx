import { Layout } from '@components/common';
import { QUIZ_COMPONENTS, QUIZ_NUMBER } from '@constants/quiz';
import ProgressBar from '@components/ProgressBar/ProgressBar';

interface IProps {
  queries: any;
}

const QuizPage1 = ({ queries }: IProps) => {
  return (
    <>
      <Layout type="fill">
        <ProgressBar />
        {QUIZ_COMPONENTS[queries]}
      </Layout>
    </>
  );
};

export default QuizPage1;

export const getStaticPaths = async () => {
  return {
    paths: QUIZ_NUMBER.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const queries = JSON.parse(JSON.stringify(params.id));

  return {
    props: {
      queries,
    },
  };
};
