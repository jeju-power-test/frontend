import styled, { css } from 'styled-components';

export const ResultContainer = styled.article`
  padding-top: 11.2rem;
  padding-bottom: 10rem;
`;

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
  margin-bottom: 3.2rem;
  line-height: 3.6rem;
  font-size: 3rem;
  white-space: pre-wrap;
`;

export const ButtonWrapper = styled.div`
  & > button:nth-of-type(1) {
    margin-bottom: 2.6rem;
  }
`;
