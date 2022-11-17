import styled, { css } from 'styled-components';
import { ColorType } from '@styles/theme';
import { IButtonProps } from './Button';

export const Button = styled.button<IButtonProps>`
  ${({ theme, variant }) => {
    const { color } = theme;

    return css`
      ${generateColor(color, variant)};

      width: 32rem;
      height: 4.8rem;
      font-size: 2.4rem;
      line-height: 2.8rem;
      font-family: 'KotraHope';
      border: 2px solid ${color.black};
      border-radius: 8.4rem;
    `;
  }}
`;

const generateColor = (color: ColorType, variant: string) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${color.primary};

        &:hover {
          background-color: ${color.primaryHover};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${color.secondary};
      `;
  }
};
