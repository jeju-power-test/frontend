import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@components/common';
import { Answer, Friend, Places } from '@components/Result';
import useTestResult from '@hooks/query/useTestResult';
import AVARTAR from '@constants/avatar';
import { IUserIdentity } from '@/types/result';
import * as Style from './Result.style';

import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { submitAnswerAtom } from '@recoil/submitAnswer';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Identity from './Identity/Identity';

function Result() {
  const router = useRouter();
  const userUrl = `https://monumental-madeleine-10eb3f.netlify.app/${router.asPath}`;
  const submitAnswer = useRecoilValue(submitAnswerAtom);
  const { submitTestResult, userIdentity } = useTestResult();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!submitAnswer.length) {
      router.push('/');
    }

    submitTestResult(submitAnswer);
  }, []);

  const filterUserIdentity = (name: string) => {
    const filteredAvatar = AVARTAR.filter(
      (avatar: IUserIdentity) => avatar.name === name,
    );

    return filteredAvatar[0].identity;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(2500);
  }, []);

  if (isLoading) {
    return (
      <Style.LoadingContainer>
        <Image
          src="/assets/images/loading.gif"
          alt="테스트 결과 분석 중"
          width={270}
          height={270}
        />
      </Style.LoadingContainer>
    );
  }

  return (
    <Style.ResultContainer>
      {!isLoading && userIdentity && (
        <>
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
            <CopyToClipboard
              text={userUrl}
              onCopy={() => alert('링크가 복사되었습니다')}
            >
              <Button variant="secondary">친구에게 공유하기</Button>
            </CopyToClipboard>
          </Style.ButtonWrapper>
        </>
      )}
    </Style.ResultContainer>
  );
}

export default Result;
