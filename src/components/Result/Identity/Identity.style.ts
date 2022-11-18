import styled, { css } from 'styled-components';

export const ResultTitle = styled.h1`
  ${({ theme }) => {
    const { primary } = theme.color;

    return css`
      color: ${primary};
      line-height: 2.3rem;
      font-size: 2.4rem;
    `;
  }}
`;

export const TestScore = styled.p`
  ${({ theme }) => {
    const { black } = theme.color;

    return css`
      margin-bottom: 3.6rem;
      color: ${black};
      line-height: 8.8rem;
      font-size: 7.6rem;
    `;
  }}
`;

export const UserIdentity = styled.p`
  ${({ theme }) => {
    const { primary } = theme.color;

    return css`
      margin-bottom: 4rem;
      white-space: pre-wrap;
      line-height: 3.6rem;
      font-size: 3rem;

      & > span {
        & > strong {
          color: ${primary};
        }
      }
    `;
  }}
`;
