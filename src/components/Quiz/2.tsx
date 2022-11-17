import { QuizContents } from '@components/common';
import { QUIZ_DATA } from '@constants/quiz';
function Quiz2() {
  return (
    <>
      <QuizContents data={QUIZ_DATA[1]} />
    </>
  );
}

export default Quiz2;
