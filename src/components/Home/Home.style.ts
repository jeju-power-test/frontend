import { Button } from '@components/common';
import styled, { css } from 'styled-components';

export const HomeQuestion = styled.p`
  ${({ theme }) => {
    const { primary } = theme.color;

    return css`
      margin-bottom: 0.2rem;
      color: ${primary};
      line-height: 2.3rem;
      font-size: 2.8rem;
    `;
  }}
`;

export const HomeTitle = styled.h1`
  margin-bottom: 6rem;
  line-height: 8.2rem;
  letter-spacing: -2.5%;
  font-size: 7rem;
`;

export const StartButton = styled(Button)`
  margin-top: 6.5rem;
  margin-bottom: 2.3rem;
`;

export const UserCountText = styled.p`
  line-height: 2.1rem;
  letter-spacing: -5%;
  font-size: 1.8rem;
  font-family: 'Pretendard';
`;
