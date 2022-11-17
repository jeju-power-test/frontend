import { QUIZ_DATA } from '@constants/quiz';
import QuizContents from './QuizContents/QuizContents';

function Quiz3() {
  return (
    <>
      <QuizContents data={QUIZ_DATA[2]} />
    </>
  );
}

export default Quiz3;
