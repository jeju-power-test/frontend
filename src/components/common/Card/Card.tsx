import { ReactNode } from 'react';
import * as Style from './Card.style';

interface ICardProps {
  children: ReactNode;
}

function Card(props: ICardProps) {
  const { children, ...rest } = props;

  return <Style.Card {...rest}>{children}</Style.Card>;
}

export default Card;
