import * as Style from './QuizContents.style';
import { Button } from '@components/common';
import { useRouter } from 'next/router';
import { QUIZ_NUMBER } from '@constants/quiz';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { progressbarAtom } from '@recoil/progressbar';
import { submitAnswerAtom } from '@recoil/submitAnswer';

function FindNextQuizNumber() {
  let router = useRouter();

  const quizNumber = QUIZ_NUMBER.find((number) => number === router.query.id);
  const nextQuizNumber = QUIZ_NUMBER.find((number) => number === quizNumber);
  const result = String(Number(nextQuizNumber) + 1);

  return result;
}

function QuizContents({ data }: any) {
  const { id, question, answer } = data;
  const router = useRouter();
  const nextPageIndex = FindNextQuizNumber();

  const setProgressbar = useSetRecoilState(progressbarAtom);
  const setSubmitAnswer = useSetRecoilState(submitAnswerAtom);

  const handleProgressbarStateClick = (selectedAnswer: string) => {
    setProgressbar(Number(id));
    setSubmitAnswer((prev) => {
      return [...prev, { id: id + 1, answer: selectedAnswer }];
    });

    if (id === 9) {
      router.push('/result');
    } else {
      router.push(`/quiz/${nextPageIndex}`);
    }
  };

  return (
    <>
      <Style.QuestionDescription>나의 제주력은 몇점?</Style.QuestionDescription>
      <Style.Question>{question}</Style.Question>
      {answer.map((answer: string, key: number) => {
        return (
          <Button
            key={key}
            style={{ margin: '1rem 0rem' }}
            onClick={() => handleProgressbarStateClick(answer)}
          >
            {answer}
          </Button>
        );
      })}
    </>
  );
}

export default QuizContents;
