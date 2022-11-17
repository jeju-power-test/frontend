import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 6rem 0;
`;

export const Description = styled.div`
  ${({ theme }) => {
    const { gray } = theme.color;

    return css`
      color: ${gray};
      text-align: right;
      padding: 1rem 0rem;
      font-size: 1.4rem;
    `;
  }}
`;
