import { atom } from 'recoil';
import { IUserSubmitData } from '@/types/result';

export const submitAnswerAtom = atom<IUserSubmitData[]>({
  key: 'submitAnswer',
  default: [],
});
