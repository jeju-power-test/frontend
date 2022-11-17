import { axiosInstance } from '@api/axiosIntance';
import { useQuery } from 'react-query';

export async function getViewCount() {
  const { data } = await axiosInstance.get('/view-count');

  return data;
}

function useViewCount() {
  const { data: viewCount } = useQuery(
    ['view-count'],
    () => getViewCount(),
    {},
  );

  return viewCount;
}

export default useViewCount;
