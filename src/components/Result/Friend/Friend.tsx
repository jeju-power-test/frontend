import { ReactNode } from 'react';
import Image from 'next/image';
import * as Style from './Friend.style';

interface IFriendProps {
  friendImage: string;
  friendAvatar: string;
  friendIdentity: ReactNode;
}

function Friend({ friendImage, friendAvatar, friendIdentity }: IFriendProps) {
  return (
    <Style.FriendContainer>
      <Style.FriendTitle>나와 잘맞는 친구</Style.FriendTitle>
      <Style.FriendContentCard>
        <Image src={friendImage} alt={friendAvatar} width={145} height={135} />
        <Style.FriendIdentity>{friendIdentity}</Style.FriendIdentity>
      </Style.FriendContentCard>
    </Style.FriendContainer>
  );
}

export default Friend;
