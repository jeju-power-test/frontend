import { atom } from 'recoil';

export const toastAlertAtom = atom<boolean>({
  key: 'toastAlert',
  default: false,
});
