import { useState } from 'react';
import { IResultData, IUserSubmitData } from '@/types/result';
import { axiosInstance } from '@api/axiosIntance';
import { useMutation } from 'react-query';

async function postTestResultData(userSubmitData: IUserSubmitData[]) {
  const { data } = await axiosInstance.post('/result', userSubmitData);

  return data;
}

function useTestResult() {
  const [userIdentity, setUserIdentity] = useState<IResultData | null>(null);

  const { mutate: submitTestResult } = useMutation(
    (userSubmitData: IUserSubmitData[]) => postTestResultData(userSubmitData),
    {
      onSuccess: (data: IResultData) => {
        setUserIdentity(data);
      },
    },
  );

  return { submitTestResult, userIdentity };
}

export default useTestResult;
