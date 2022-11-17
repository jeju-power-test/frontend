import { QuizContents } from '@components/common';
import { QUIZ_DATA } from '@constants/quiz';
function Quiz1() {
  console.log();
  return (
    <>
      <QuizContents data={QUIZ_DATA[0]} />
    </>
  );
}

export default Quiz1;
