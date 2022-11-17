import Image from 'next/image';
import { Layout } from '@components/common';
import * as Style from './Home.style';

function Home() {
  return (
    <Layout>
      <Style.HomeQuestion>나의 제주력은 몇점?</Style.HomeQuestion>
      <Style.HomeTitle>제주력 테스트</Style.HomeTitle>
      <Image
        src="/assets/images/home-test.png"
        alt="홈페이지 테스트"
        width={320}
        height={251}
      />
      <Style.StartButton variant="primary">시작하기</Style.StartButton>
      <Style.UserCountText>지금까지 000,000명이 참여했어요</Style.UserCountText>
    </Layout>
  );
}

export default Home;
