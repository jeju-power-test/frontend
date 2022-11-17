import * as Style from './QuizContents.style';
import { ColorType } from '@styles/theme';
import { Button } from '@components/common';
import { Router, useRouter } from 'next/router';
import { QUIZ_NUMBER } from '@constants/quiz';
import { useSetRecoilState } from 'recoil';
import { progressbarState } from '@recoil/progressbar';
import { useEffect } from 'react';

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
      <Style.QuestionDescription>나의 제주력은 몇점?</Style.QuestionDescription>

      <Style.Question>{question}</Style.Question>

      {answer.map((answer: any, key: number) => {
        return (
          <Button
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
          </Button>
        );
      })}
    </>
  );
}

export default QuizContents;
