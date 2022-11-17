import { Card } from '@components/common';
import styled, { css } from 'styled-components';

import { Collapse, Text } from '@nextui-org/react';

export const AnswerContentCard = styled(Card)`
  margin-top: 5.6rem;
  padding: 2.5rem 1.6rem;

  & > .nextui-grid-item {
    padding: 0rem;
    box-shadow: none;
  }
`;

export const AnswerContentTitle = styled.h1`
  margin-bottom: 2.1rem;
  line-height: 3rem;
  font-size: 2.6rem;
`;

export const QuizContentWrapper = styled(Collapse.Group)`
  margin-bottom: 2.8rem;
  line-height: 2.3rem;
  font-size: 2rem;
`;

export const QuizAnswerContentWrapper = styled.li`
  margin-bottom: 1.8rem;
`;

export const QuizAnswerContent = styled(Collapse)<{ correct: string }>`
  ${({ theme, correct }) => {
    const { alert, success } = theme.color;

    return css`
      .nextui-collapse-title-content {
        display: flex;

        & > .nextui-collapse-subtitle {
          height: 100%;
          margin-left: 0.6rem;
          color: ${correct === 'success' ? success : alert};
        }
      }

      .nextui-collapse-title {
        margin-bottom: 0.2rem;
        line-height: 2.2rem;
        font-size: 2.4rem;
      }
    `;
  }}
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const QuizCommentary = styled(Text)`
  line-height: 2.4rem;
  font-size: 1.6rem;
  font-family: 'Pretendard-Regular';
`;
