import * as Style from './QuizContents.style';
import { ColorType } from '@styles/theme';
import { Button } from '@components/common';
import { Router, useRouter } from 'next/router';
import { QUIZ_NUMBER } from '@constants/quiz';

// function FindQuizNumber() {
//   const router = useRouter();
//   const quizNumber = QUIZ_NUMBER.find((number) => number === router.query.id);
//   return quizNumber;
// }

// function FindNextQuizNumber() {
//   const quizNumber = FindQuizNumber();
//   const nextQuizNumber = QUIZ_NUMBER.find(
//     (number) => number === Number(quizNumber) + 1,
//   );
//   return nextQuizNumber;
// }

function FindNextQuizNumber() {
  const router = useRouter();
  const quizNumber = QUIZ_NUMBER.find((number) => number === router.query.id);
  const nextQuizNumber = QUIZ_NUMBER.find((number) => number === quizNumber);
  const result = String(Number(nextQuizNumber) + 1);

  return result;
}

function QuizContents({ data }: any) {
  const { id, question, answer } = data;
  console.log(question);
  console.log(answer);
  let router = useRouter();
  let nextPageIndex = FindNextQuizNumber();
  return (
    <>
      <Style.QuestionDescription>나의 제주력은 몇점?</Style.QuestionDescription>

      <Style.Question>{question}</Style.Question>

      {answer.map((answer: any) => {
        return (
          <Button
            style={{ margin: '1rem 0rem' }}
            onClick={() => {
              router.push(`/quiz/${nextPageIndex}`);
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
