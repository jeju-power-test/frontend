import { QUIZ_DATA } from '@constants/quiz';
import QuizContents from './QuizContents/QuizContents';

function Quiz2() {
  return (
    <>
      <QuizContents data={QUIZ_DATA[1]} />
    </>
  );
}

export default Quiz2;
