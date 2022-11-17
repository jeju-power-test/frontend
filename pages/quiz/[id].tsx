import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { QUIZ_COMPONENTS, QUIZ_NUMBER } from '@constants/quiz';
import ProgressBar from '@components/ProgressBar/ProgressBar';
import { QuizLayout } from '@components/Quiz/QuizContents/QuizContents.style';
import { useRecoilState } from 'recoil';
import { submitAnswerAtom } from '@recoil/submitAnswer';

interface IProps {
  queries: any;
}

const QuizPage = ({ queries }: IProps) => {
  const router = useRouter();
  const [submitAnswer, setSubmitAnswer] = useRecoilState(submitAnswerAtom);

  useEffect(() => {
    if (queries === '1') {
      setSubmitAnswer([]);
      return;
    }

    if (!submitAnswer.length) {
      router.push('/');
    }

    if (Number(queries) !== submitAnswer.length + 1) {
      const newSubmitData = [...submitAnswer];
      newSubmitData.pop();

      setSubmitAnswer(newSubmitData);
    }
  }, [router]);

  return (
    <QuizLayout>
      <ProgressBar status={queries} />
      {QUIZ_COMPONENTS[queries]}
    </QuizLayout>
  );
};

export default QuizPage;

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
