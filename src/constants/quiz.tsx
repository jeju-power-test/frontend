import Quiz1 from '@components/Quiz/1';
import Quiz2 from '@components/Quiz/2';
import Quiz3 from '@components/Quiz/3';
import Quiz4 from '@components/Quiz/4';
import Quiz5 from '@components/Quiz/5';
import Quiz6 from '@components/Quiz/6';
import Quiz7 from '@components/Quiz/7';
import Quiz8 from '@components/Quiz/8';
import Quiz9 from '@components/Quiz/9';
import Quiz10 from '@components/Quiz/10';

export const QUIZ_COMPONENTS: any = {
  '1': <Quiz1 />,
  '2': <Quiz2 />,
  '3': <Quiz3 />,
  '4': <Quiz4 />,
  '5': <Quiz5 />,
  '6': <Quiz6 />,
  '7': <Quiz7 />,
  '8': <Quiz8 />,
  '9': <Quiz9 />,
  '10': <Quiz10 />,
};

export const QUIZ_NUMBER = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
] as const;

export const QUIZ_DATA = [
  {
    id: 0,
    question: '제주에서 일제강점기로부터 시작된 아픔을 가진 음식은?',
    answer: ['오메기떡', '물회', '몸국', '고기 국수'],
  },
  {
    id: 1,
    question:
      '제주 3대 항일운동의 하나로 우리나라 최대 어민 운동이자 1930년대 최대의 항일운동은?',
    answer: [
      '3ㆍ1 운동',
      '법정사 항일운동',
      '제주공립농업학교 학생운동',
      '제주해녀항일운동',
    ],
  },
  {
    id: 2,
    question:
      '제주도에서 일어난 한국 현대사에서 한국전쟁 다음으로 인명 피해가 극심했던 비극적인 사건은?',
    answer: ['6·10만세운동', '신민회 사건', '조선어학회 사건', '4ㆍ3 사건'],
  },
  {
    id: 3,
    question:
      '소가 누워있는 모양을 닮았다고 해서 일찍부터 소섬 또는 쉐섬으로 불리운 섬은?',
    answer: ['마라도', '우도', '비양도', '가파도'],
  },
  {
    id: 4,
    question:
      '제주특별자치도 한라산 산정에 있으며 사시사철 물이 괴어 있는 호수의 이름은?',
    answer: ['천지', '백록담'],
  },
  {
    id: 5,
    question: `'제주 OOO 해안 일제 동굴진지'`,
    answer: ['일출봉', '한라산', '송악산', '가마오름'],
  },
  {
    id: 6,
    question: '경 호곡 말곡',
    answer: ['그러지 말고', '그렇고 말고'],
  },
  {
    id: 7,
    question: '도르멍 도르멍 옵서',
    answer: ['천천히 오세요', '빨리빨리 오세요'],
  },
  {
    id: 8,
    question: '그거 앗아도라',
    answer: ['그거 가져다 줘라', '그거 알아둬라, 그거 가져다 줘라'],
  },
  {
    id: 9,
    question: '제주특별자치도의 메인 캐릭터는?',
    answer: ['왼쪽', '오른쪽'],
  },
];
