import { ReactElement } from 'react';

export interface IUserSubmitData {
  id: number;
  answer: string;
}

export interface IResultAnswerContents {
  id: number;
  answer: string;
  commentary: string;
  correct: string;
}

export interface IUserAvatar {
  image: string;
  name: string;
  score: number;
}

export interface IUserIdentity {
  name: string;
  identity: ReactElement;
}

export interface IFriend {
  image: string;
  name: string;
}

export interface IPlaces {
  description: string;
  image: string;
  title: string;
  url: string;
}

export interface IResultData {
  avatar: IUserAvatar;
  contents: IResultAnswerContents[];
  friend: IFriend;
  places: IPlaces[];
}
