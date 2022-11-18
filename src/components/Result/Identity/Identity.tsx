import useScrollFadeIn from '@hooks/useScrollFadeIn';
import AVARTAR from '@constants/avatar';
import { IUserIdentity } from '@/types/result';
import * as Style from './Identity.style';

interface IdentityProps {
  avatar: any;
}

function Identity({ avatar }: IdentityProps) {
  const scrollFadeIn = {
    title: useScrollFadeIn({ direction: 'up-20', duration: 0.5, delay: 0.2 }),
    identity: useScrollFadeIn({
      direction: 'up-20',
      duration: 0.5,
      delay: 0.3,
    }),
    image: useScrollFadeIn({ direction: 'up-20', duration: 0.5, delay: 0.4 }),
  };

  const filterUserIdentity = (name: string) => {
    const filteredAvatar = AVARTAR.filter(
      (avatar: IUserIdentity) => avatar.name === name,
    );

    return filteredAvatar[0].identity;
  };

  return (
    <div>
      <div {...scrollFadeIn.title}>
        <Style.ResultTitle>나의 제주력은 몇점?</Style.ResultTitle>
        <Style.TestScore>{`${avatar.score}점`}</Style.TestScore>
      </div>
      <Style.UserIdentity {...scrollFadeIn.identity}>
        {filterUserIdentity(avatar.name)}
      </Style.UserIdentity>
      <div {...scrollFadeIn.image}>
        <img src={avatar.image} alt={avatar.name} />
      </div>
    </div>
  );
}

export default Identity;
