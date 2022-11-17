import { Card } from '@components/common';
import styled, { css } from 'styled-components';

export const FriendContainer = styled.section`
  margin-top: 3.7rem;
`;

export const FriendContentCard = styled(Card)`
  padding: 2rem 8.1rem;
  text-align: center;

  & > img {
    margin-bottom: 1.6rem;
  }
`;

export const FriendTitle = styled.h1`
  margin-bottom: 2.2rem;
  line-height: 4.2rem;
  font-size: 3.6rem;
`;

export const FriendIdentity = styled.p`
  ${({ theme }) => {
    const { primary } = theme.color;

    return css`
      white-space: pre-wrap;
      line-height: 2.6rem;
      font-size: 2.2rem;

      & > span {
        & > strong {
          color: ${primary};
        }
      }
    `;
  }}
`;
