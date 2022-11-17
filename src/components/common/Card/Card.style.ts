import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => {
    const { black, white } = theme.color;

    return css`
      width: 32rem;
      text-align: left;
      border: 2px solid ${black};
      border-radius: 2rem;
      background-color: ${white};
    `;
  }}
`;
