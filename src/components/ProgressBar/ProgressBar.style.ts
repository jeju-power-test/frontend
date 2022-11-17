import styled, { css } from 'styled-components';
import { Progress } from '@nextui-org/react';

export const Container = styled.div``;

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

export const Progressbar = styled(Progress)`
  & > .nextui-progress-wrapper-enter {
    position: relative;
  }
`;

export const Test = styled.div`
  position: absolute;
  top: -2rem;
  right: -3rem;
`;
