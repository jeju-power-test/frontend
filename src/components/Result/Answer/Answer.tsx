import * as Style from './Answer.style';
import { Grid } from '@nextui-org/react';
import { ANSWER } from '../mock';

function Answer() {
  return (
    <section>
      <Style.AnswerContentCard>
        <Style.AnswerContentTitle>정답 공개</Style.AnswerContentTitle>
        <Grid.Container gap={2}>
          <Style.QuizContentWrapper divider={false}>
            {ANSWER.map((quiz) => (
              <Style.QuizAnswerTitle
                key={quiz.id}
                title={`${quiz.id}번 ${quiz.answer}`}
                correct={quiz.correct}
              >
                <Style.QuizCommentary>{quiz.commentary}</Style.QuizCommentary>
              </Style.QuizAnswerTitle>
            ))}
          </Style.QuizContentWrapper>
        </Grid.Container>
      </Style.AnswerContentCard>
    </section>
  );
}

export default Answer;
