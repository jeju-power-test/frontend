import { useRouter } from 'next/router';
import * as Style from './QuizContents.style';
import { QUIZ_NUMBER } from '@constants/quiz';
import { IQuizData } from '@/types/quiz';

import { useSetRecoilState } from 'recoil';
import { submitAnswerAtom } from '@recoil/submitAnswer';

function FindNextQuizNumber() {
  const router = useRouter();

  const quizNumber = QUIZ_NUMBER.find((number) => number === router.query.id);
  const nextQuizNumber = QUIZ_NUMBER.find((number) => number === quizNumber);
  const result = String(Number(nextQuizNumber) + 1);

  return result;
}

interface IQuizContentsProps {
  data: IQuizData;
}

function QuizContents({ data }: IQuizContentsProps) {
  const { id, question, dialect, answer, img } = data;
  const router = useRouter();
  const nextPageIndex = FindNextQuizNumber();

  const setSubmitAnswer = useSetRecoilState(submitAnswerAtom);

  const handleProgressbarStateClick = (
    selectedId: number,
    selectedAnswer: string,
  ) => {
    setSubmitAnswer((prev) => {
      return [...prev, { id: selectedId, answer: selectedAnswer }];
    });

    if (id === 9) {
      router.push('/result');
    } else {
      router.push(`/quiz/${nextPageIndex}`);
    }
  };

  return (
    <>
      <Style.Question>{question}</Style.Question>
      {dialect && <Style.DialectQuestion>{dialect}</Style.DialectQuestion>}
      {id < 6 && (
        <Style.QuestionImage
          src={img as string}
          alt="QuestionImg"
          width={320}
          height={175}
          priority
        />
      )}
      {answer.map((answer: string, key: number) => (
        <Style.QuestionButton
          key={key}
          onClick={() => handleProgressbarStateClick(id + 1, answer)}
        >
          {answer}
        </Style.QuestionButton>
      ))}
    </>
  );
}

export default QuizContents;
