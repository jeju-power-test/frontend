import { Layout } from '@components/common';
import { QUIZ_COMPONENTS, QUIZ_NUMBER } from '@constants/quiz';

interface IProps {
  queries: any;
}

const QuizPage1 = ({ queries }: IProps) => {
  return (
    <>
      <Layout>
        <div>문제 {queries}</div>
        {QUIZ_COMPONENTS[queries]}
      </Layout>
    </>
  );
};

export default QuizPage1;

export const getStaticPaths = async () => {
  return {
    // paths: [{ params: { id: '1' } }],
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