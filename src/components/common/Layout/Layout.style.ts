import styled, { css } from 'styled-components';

export const Layout = styled.main`
  ${({ theme }) => {
    const { black } = theme.color;

    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 32rem;
      height: 100vh;
      margin: 0 auto;
      text-align: center;
      color: ${black};
    `;
  }}
`;
