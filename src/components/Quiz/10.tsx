import { QuizContents } from '@components/common';
import { QUIZ_DATA } from '@constants/quiz';
import * as Style from '../common/Quiz/Quiz.style';

function Quiz10() {
  return (
    <>
      <Style.ImgContainer>
        <Style.Img />
        <Style.Img />
      </Style.ImgContainer>
      <QuizContents data={QUIZ_DATA[9]} />
    </>
  );
}

export default Quiz10;
