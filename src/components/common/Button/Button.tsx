import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import * as Style from './Button.style';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

function Button(props: PropsWithChildren<IButtonProps>) {
  const { children, ...rest } = props;

  return <Style.Button {...rest}>{children}</Style.Button>;
}

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
};

export type { IButtonProps };
export default Button;
