import * as Style from './QuizContents.style';
import { useRouter } from 'next/router';
import { QUIZ_NUMBER } from '@constants/quiz';
import { useSetRecoilState } from 'recoil';
import { progressbarAtom } from '@recoil/progressbar';
import { submitAnswerAtom } from '@recoil/submitAnswer';
import * as subStyle from '../Quiz.style';
import Image from 'next/image';

function FindNextQuizNumber() {
  const router = useRouter();

  const quizNumber = QUIZ_NUMBER.find((number) => number === router.query.id);
  const nextQuizNumber = QUIZ_NUMBER.find((number) => number === quizNumber);
  const result = String(Number(nextQuizNumber) + 1);

  return result;
}

function BonusQuizContents({ data }: any) {
  const { id, question, answer, img } = data;
  const router = useRouter();
  const nextPageIndex = FindNextQuizNumber();

  const setProgressbar = useSetRecoilState(progressbarAtom);
  const setSubmitAnswer = useSetRecoilState(submitAnswerAtom);

  const handleProgressbarStateClick = (
    selectedId: number,
    selectedAnswer: string,
  ) => {
    setProgressbar(Number(selectedId));
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

      <subStyle.ImgContainer>
        <subStyle.ImgBox>
          <Image
            src="https://kr.object.ncloudstorage.com/jejupower/content/10-A.png"
            alt="왼쪽 아이콘"
            width={117}
            height={148}
          />
        </subStyle.ImgBox>

        <subStyle.ImgBox>
          <Image
            src="https://kr.object.ncloudstorage.com/jejupower/content/10-B.png"
            alt="오른쪽 아이콘"
            width={148}
            height={98}
          />
        </subStyle.ImgBox>
      </subStyle.ImgContainer>
      <Style.BtnLayout>
        {answer.map((answer: string, key: number) => (
          <Style.QuestionButton
            key={key}
            style={{ margin: '1rem 0rem', width: '50px' }}
            onClick={() => handleProgressbarStateClick(id + 1, answer)}
          >
            {answer}
          </Style.QuestionButton>
        ))}
      </Style.BtnLayout>
    </>
  );
}

export default BonusQuizContents;
