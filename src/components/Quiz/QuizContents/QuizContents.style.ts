import { Button } from '@components/common';
import styled, { css, keyframes } from 'styled-components';
import { fadeInLeft, zoomOut } from 'react-animations';

const FadeInLeft = keyframes`${fadeInLeft}`;
const ZoomOut = keyframes`${zoomOut}`;

export const Question = styled.div`
  font-size: 3rem;
  font-weight: 400;
  width: 100%;
  margin: 2rem 0;
`;

export const QuestionDescription = styled.div`
  font-size: 2rem;
  font-weight: 400;
  width: 100%;
  margin: 1.4rem 0;
`;

export const QuestionButton = styled(Button)`
  animation: 1.5s ${FadeInLeft};

  &:focus {
    /* transform: scale(1.3); */
    animation: 1.7s ${ZoomOut};
  }
`;
