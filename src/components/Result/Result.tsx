import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@components/common';
import { Answer, Friend, Places } from '@components/Result';
import useTestResult from '@hooks/query/useTestResult';
import AVARTAR from '@constants/avatar';
import { IUserIdentity } from '@/types/result';
import * as Style from './Result.style';

import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { submitAnswerAtom } from '@recoil/submitAnswer';

function Result() {
  const router = useRouter();
  const submitAnswer = useRecoilValue(submitAnswerAtom);

  const { submitTestResult, userIdentity } = useTestResult();

  useEffect(() => {
    if (!submitAnswer.length) {
      router.push('/');
    }

    submitTestResult(submitAnswer);
  }, []);

  console.log('userIdentity: ', userIdentity);

  const filterUserIdentity = (name: string) => {
    const filteredAvatar = AVARTAR.filter(
      (avatar: IUserIdentity) => avatar.name === name,
    );

    return filteredAvatar[0].identity;
  };

  return (
    <Style.ResultContainer>
      {userIdentity && (
        <>
          <Style.ResultTitle>나의 제주력은 몇점?</Style.ResultTitle>
          <Style.TestScore>{`${userIdentity.avatar.score}점`}</Style.TestScore>
          <Style.UserIdentity>
            {filterUserIdentity(userIdentity.avatar.name)}
          </Style.UserIdentity>
          <Image
            src={userIdentity.avatar.image}
            alt={userIdentity.avatar.name}
            width={240}
            height={245}
            priority
          />
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
            <Button variant="secondary">친구에게 공유하기</Button>
          </Style.ButtonWrapper>
        </>
      )}
    </Style.ResultContainer>
  );
}

export default Result;
