import styled, { css } from 'styled-components';

export const Layout = styled.main<{ type: string }>`
  ${({ theme, type }) => {
    const { black } = theme.color;

    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 32rem;
      height: ${type === 'fill' && '100vh'};
      margin: 0 auto;
      text-align: center;
      color: ${black};
    `;
  }}
`;
