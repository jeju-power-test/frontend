import { Layout, ToastAlert } from '@components/common';
import Result from '@components/Result/Result';
import { toastAlertAtom } from '@recoil/toastAlert';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

function ResultPage() {
  const [isToastAlert, setIsToastAlert] = useRecoilState(toastAlertAtom);

  useEffect(() => {
    setTimeout(() => {
      setIsToastAlert(false);
    }, 1500);

    return () => clearTimeout(1500);
  }, []);

  return (
    <Layout>
      <Result />
      {isToastAlert && <ToastAlert />}
    </Layout>
  );
}

export default ResultPage;
