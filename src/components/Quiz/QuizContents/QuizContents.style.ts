import { Button } from '@components/common';
import styled, { keyframes } from 'styled-components';
import { fadeInLeft, zoomOut } from 'react-animations';
import Image from 'next/image';

const FadeInLeft = keyframes`${fadeInLeft}`;
const ZoomOut = keyframes`${zoomOut}`;

export const QuizLayout = styled.main`
  max-width: 32rem;
  padding: 4.7rem 0rem;
  margin: 0 auto;
`;

export const BtnLayout = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
`;

export const Question = styled.div`
  animation: 0.3s ${FadeInLeft};
  width: 100%;
  margin-top: 6.8rem;
  margin-bottom: 2.4rem;
  text-align: center;
  line-height: 4rem;
  word-break: keep-all;
  font-size: 3rem;
`;

export const QuestionImage = styled(Image)`
  margin-top: 2.4rem;
  margin-bottom: 6.4rem;
  animation: 0.6s ${FadeInLeft};
`;

export const QuestionButton = styled(Button)`
  animation: 0.9s ${FadeInLeft};

  &:focus {
    /* transform: scale(1.3); */
    animation: 0.7s ${ZoomOut};
  }
`;
