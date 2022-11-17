import * as Style from './Quiz.style';
import { QUIZ_DATA } from '@constants/quiz';
import QuizContents from './QuizContents/QuizContents';

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
