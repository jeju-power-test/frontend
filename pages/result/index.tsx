import { Layout, ToastAlert } from '@components/common';
import Result from '@components/Result/Result';
import { toastAlertAtom } from '@recoil/toastAlert';
import { useRecoilValue } from 'recoil';

function ResultPage() {
  const isToastAlert = useRecoilValue(toastAlertAtom);

  return (
    <Layout>
      <Result />
      {isToastAlert && <ToastAlert />}
    </Layout>
  );
}

export default ResultPage;
