import * as Style from './Quiz.style';
import { QUIZ_DATA } from '@constants/quiz';
import BonusQuizContents from './QuizContents/BonusQuizContents';
import Image from 'next/image';
function Quiz10() {
  return (
    <>
      <BonusQuizContents data={QUIZ_DATA[9]} />
    </>
  );
}

export default Quiz10;
