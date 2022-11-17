import * as Style from './QuizContents.style';
import { Button } from '@components/common';
import { useRouter } from 'next/router';
import { QUIZ_NUMBER } from '@constants/quiz';
import { useSetRecoilState } from 'recoil';
import { progressbarState } from '@recoil/progressbar';

function FindNextQuizNumber() {
  let router = useRouter();

  const quizNumber = QUIZ_NUMBER.find((number) => number === router.query.id);
  const nextQuizNumber = QUIZ_NUMBER.find((number) => number === quizNumber);
  const result = String(Number(nextQuizNumber) + 1);

  return result;
}

function QuizContents({ data }: any) {
  const { id, question, answer } = data;
  let router = useRouter();
  const setProgressbar = useSetRecoilState(progressbarState);
  setProgressbar(Number(id));
  let nextPageIndex = FindNextQuizNumber();
  return (
    <>
      <Style.Question>{question}</Style.Question>

      {answer.map((answer: any, key: number) => {
        return (
          <Style.QuestionButton
            key={key}
            style={{ margin: '1rem 0rem' }}
            onClick={() => {
              if (id === 9) {
                router.push('/result');
              } else {
                router.push(`/quiz/${nextPageIndex}`);
              }
            }}
          >
            {answer}
          </Style.QuestionButton>
        );
      })}
    </>
  );
}

export default QuizContents;
