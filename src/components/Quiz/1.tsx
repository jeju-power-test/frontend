import { QUIZ_DATA } from '@constants/quiz';
import QuizContents from './QuizContents/QuizContents';

function Quiz1() {
  return <QuizContents data={QUIZ_DATA[0]} />;
}

export default Quiz1;
