import Image from 'next/image';
import * as Style from '../Result.style';

function AnalysisLoading() {
  return (
    <Style.LoadingContainer>
      <Image
        src="/assets/images/loading.gif"
        alt="테스트 결과 분석 중"
        width={318}
        height={374}
      />
    </Style.LoadingContainer>
  );
}

export default AnalysisLoading;
