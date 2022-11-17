import useScrollFadeIn from '@hooks/useScrollFadeIn';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as Style from './Home.style';

interface IHomeProps {
  count: number;
}

function Home({ count }: IHomeProps) {
  const router = useRouter();

  const scrollFadeIn = {
    title: useScrollFadeIn({ direction: 'up-20', duration: 0.5, delay: 0.2 }),
    image: useScrollFadeIn({ direction: 'up-20', duration: 0.5, delay: 0.4 }),
    button: useScrollFadeIn({ direction: 'up-20', duration: 0.5, delay: 0.6 }),
    countText: useScrollFadeIn({ direction: 'up-20', duration: 0.5, delay: 1 }),
  };

  return (
    <section>
      <div {...scrollFadeIn.title}>
        <Style.HomeQuestion>나의 제주력은 몇점?</Style.HomeQuestion>
        <Style.HomeTitle>제주력 테스트</Style.HomeTitle>
      </div>
      <div {...scrollFadeIn.image}>
        <Image
          src="/assets/images/intro.gif"
          alt="홈페이지 테스트"
          width={240}
          height={256}
          priority
        />
      </div>
      <div {...scrollFadeIn.button}>
        <Style.StartButton
          variant="primary"
          onClick={() => router.push('/quiz/1')}
        >
          시작하기
        </Style.StartButton>
      </div>
      <Style.UserCountText {...scrollFadeIn.countText}>
        {`지금까지 ${count.toLocaleString()}명이 참여했어요`}
      </Style.UserCountText>
    </section>
  );
}

export default Home;
