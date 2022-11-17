import * as Style from './Quiz.style';
import { QUIZ_DATA } from '@constants/quiz';
import QuizContents from './QuizContents/QuizContents';
import Image from 'next/image';
function Quiz10() {
  return (
    <>
      <Style.ImgContainer>
        <Style.ImgBox>
          <Image
            src="/assets/images/bonus1.png"
            alt="프로그래바 아이콘"
            width={117}
            height={148}
          />
        </Style.ImgBox>

        <Style.ImgBox>
          <Image
            src="/assets/images/bonus2.png"
            alt="프로그래바 아이콘"
            width={148}
            height={98}
          />
        </Style.ImgBox>
      </Style.ImgContainer>
      <QuizContents data={QUIZ_DATA[9]} />
    </>
  );
}

export default Quiz10;
