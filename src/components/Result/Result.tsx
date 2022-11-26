import { useRouter } from 'next/router';
import { Button } from '@components/common';
import { Answer, Friend, Identity, Places } from '@components/Result';
import AVARTAR from '@constants/avatar';
import { IResultData, IUserIdentity } from '@/types/result';
import * as Style from './Result.style';

import { useSetRecoilState } from 'recoil';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toastAlertAtom } from '@recoil/toastAlert';

interface IResultProps {
  userIdentity: IResultData;
}

function Result({ userIdentity }: IResultProps) {
  const router = useRouter();

  const setIsToastAlert = useSetRecoilState(toastAlertAtom);

  const filterUserIdentity = (name: string) => {
    const filteredAvatar = AVARTAR.filter(
      (avatar: IUserIdentity) => avatar.name === name,
    );

    return filteredAvatar[0].identity;
  };

  const filterUserIdentityId = (name: string) => {
    const filteredAvatar = AVARTAR.filter(
      (avatar: IUserIdentity) => avatar.name === name,
    );

    return filteredAvatar[0].id;
  };

  const userUrl = `https://jejupower.site/result/avatar?id=${filterUserIdentityId(
    userIdentity.avatar.name,
  )}&s=${userIdentity.avatar.score}`;

  return (
    <Style.ResultContainer>
      <Identity avatar={userIdentity.avatar} />
      <Answer contents={userIdentity.contents} />
      <Friend
        friendImage={userIdentity.friend.image}
        friendAvatar={userIdentity.friend.name}
        friendIdentity={filterUserIdentity(userIdentity.friend.name)}
      />
      <Places places={userIdentity.places} />
      <Style.ButtonWrapper>
        <Button variant="primary" onClick={() => router.push('/')}>
          테스트 다시 하기
        </Button>
        <CopyToClipboard text={userUrl} onCopy={() => setIsToastAlert(true)}>
          <Button variant="secondary">친구에게 공유하기</Button>
        </CopyToClipboard>
      </Style.ButtonWrapper>
    </Style.ResultContainer>
  );
}

export default Result;
