import styled from 'styled-components';

export const PlacesContainer = styled.section`
  cursor: pointer;
  margin-top: 4rem;
  margin-bottom: 6.2rem;
`;

export const PlacesTitle = styled.h1`
  margin-bottom: 2.2rem;
  line-height: 4.2rem;
  font-size: 3.6rem;
`;

export const PlaceCardWrapper = styled.li`
  transition: transform 0.2s ease-in-out;

  &:not(:nth-last-of-type(1)) {
    margin-bottom: 2.2rem;
  }

  & > a {
    & > div {
      & > img {
        object-fit: contain;
      }
    }
  }

  &:hover {
    transform: translate3D(0, -1rem, 0);
  }
`;

export const PlaceContent = styled.div`
  padding: 1.1rem 2.1rem 3.3rem;

  & > h2 {
    margin-bottom: 0.6rem;
    line-height: 2.8rem;
    font-size: 2.4rem;
  }

  & > p {
    line-height: 1.9rem;
    font-size: 1.6rem;
    font-family: 'Pretendard';
  }
`;
