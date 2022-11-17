import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@components/common';
import { Answer, Places } from '@components/Result';
import * as Style from './Result.style';
import useTestResult from '@hooks/query/useTestResult';
import { useEffect } from 'react';
import { SUBMIT } from './mock';

function Result() {
  const router = useRouter();
  const { submitTestResult, userIdentity } = useTestResult();

  useEffect(() => {
    submitTestResult(SUBMIT);
  }, []);

  console.log('userIdentity: ', userIdentity);

  return (
    <Style.ResultContainer>
      <Style.ResultTitle>나의 제주력은 몇점?</Style.ResultTitle>
      <Style.TestScore>70점</Style.TestScore>
      <Style.UserIdentity>
        {
          '최태성급의\n제주 역사 지식을 가졌지만\n당장 제주 여행이 시급한 한라봉'
        }
      </Style.UserIdentity>
      <Image
        src="/assets/images/home-test.png"
        alt="홈페이지 테스트"
        width={320}
        height={251}
        priority
      />
      <Answer />
      <Places />
      <Style.ButtonWrapper>
        <Button variant="primary" onClick={() => router.push('/')}>
          테스트 다시 하기
        </Button>
        <Button variant="secondary">친구에게 공유하기</Button>
      </Style.ButtonWrapper>
    </Style.ResultContainer>
  );
}

export default Result;
