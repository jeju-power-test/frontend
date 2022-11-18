import * as Style from './QuizContents.style';
import { useRouter } from 'next/router';
import { QUIZ_NUMBER } from '@constants/quiz';
import { useSetRecoilState } from 'recoil';
import { submitAnswerAtom } from '@recoil/submitAnswer';

function FindNextQuizNumber() {
  const router = useRouter();

  const quizNumber = QUIZ_NUMBER.find((number) => number === router.query.id);
  const nextQuizNumber = QUIZ_NUMBER.find((number) => number === quizNumber);
  const result = String(Number(nextQuizNumber) + 1);

  return result;
}

function QuizContents({ data }: any) {
  const { id, question, answer, img } = data;
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
      {id < 6 ? (
        <Style.QuestionImage
          src={img}
          alt="QuestionImg"
          width={320}
          height={175}
          priority
        />
      ) : null}

      {answer.map((answer: string, key: number) => (
        <Style.QuestionButton
          key={key}
          style={{ margin: '1rem 0rem' }}
          onClick={() => handleProgressbarStateClick(id + 1, answer)}
        >
          {answer}
        </Style.QuestionButton>
      ))}
    </>
  );
}

export default QuizContents;
