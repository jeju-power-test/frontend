import Image from 'next/image';
import { IResultAnswerContents } from '@/types/result';
import * as Style from './Answer.style';
import { Grid } from '@nextui-org/react';

interface IAnswerProps {
  contents: IResultAnswerContents[];
}

function Answer({ contents }: IAnswerProps) {
  return (
    <section>
      <Style.AnswerContentCard>
        <Style.AnswerContentTitle>정답 공개</Style.AnswerContentTitle>
        <Grid.Container gap={2}>
          <Style.QuizContentWrapper divider={false}>
            {contents.map((quiz) => (
              <Style.QuizAnswerContent
                key={quiz.id}
                title={
                  <Style.IconWrapper>
                    <Image
                      src={`/assets/svg/${quiz.correct}.svg`}
                      alt="실패 아이콘"
                      width={22}
                      height={22}
                      priority
                    />
                  </Style.IconWrapper>
                }
                correct={quiz.correct}
                subtitle={`${quiz.id}번 정답: ${quiz.answer}`}
              >
                <Style.QuizCommentary>{quiz.commentary}</Style.QuizCommentary>
              </Style.QuizAnswerContent>
            ))}
          </Style.QuizContentWrapper>
        </Grid.Container>
      </Style.AnswerContentCard>
    </section>
  );
}

export default Answer;
