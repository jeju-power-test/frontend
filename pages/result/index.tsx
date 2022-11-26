import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Layout, ToastAlert } from '@components/common';
import { AnalysisLoading } from '@components/Result';
import Result from '@components/Result/Result';
import useTestResult from '@hooks/query/useTestResult';

import { submitAnswerAtom } from '@recoil/submitAnswer';
import { toastAlertAtom } from '@recoil/toastAlert';
import { useRecoilState, useRecoilValue } from 'recoil';

function ResultPage() {
  const router = useRouter();
  const [isToastAlert, setIsToastAlert] = useRecoilState(toastAlertAtom);
  const submitAnswer = useRecoilValue(submitAnswerAtom);

  const [isLoading, setIsLoading] = useState(true);

  const { submitTestResult, userIdentity } = useTestResult();

  useEffect(() => {
    if (!submitAnswer.length) {
      router.push('/');
    }

    submitTestResult(submitAnswer);
  }, []);

  useEffect(() => {
    if (!isToastAlert) return;

    setTimeout(() => {
      setIsToastAlert(false);
    }, 1500);

    return () => clearTimeout(1500);
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(2500);
  }, []);

  if (isLoading) {
    return <AnalysisLoading />;
  }

  return (
    <Layout>
      {userIdentity && <Result userIdentity={userIdentity} />}
      {isToastAlert && <ToastAlert />}
    </Layout>
  );
}

export default ResultPage;
