export interface IQuizData {
  id: number;
  question: string;
  dialect?: string;
  answer: string[];
  img?: string;
}

export interface IQuizDataContent {
  data: IQuizData;
}
