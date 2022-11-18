import Image from 'next/image';
import { Card } from '@components/common';
import useScrollFadeIn from '@hooks/useScrollFadeIn';
import { IPlaces } from '@/types/result';
import * as Style from './Place.style';
import Link from 'next/link';

interface IPlaceProps {
  places: IPlaces[];
}

function Places({ places }: IPlaceProps) {
  const scrollFadeIn = {
    places: useScrollFadeIn({ direction: 'up-20', duration: 0.5, delay: 0.2 }),
  };

  return (
    <Style.PlacesContainer {...scrollFadeIn.places}>
      <Style.PlacesTitle>추천 플레이스</Style.PlacesTitle>
      <ul>
        {places.map((place) => (
          <Style.PlaceCardWrapper key={place.title}>
            <Link href={place.url}>
              <Card>
                <Image
                  src={place.image}
                  alt={place.title}
                  width={316}
                  height={175}
                />
                <Style.PlaceContent>
                  <h2>{place.title}</h2>
                  <p>{place.description}</p>
                </Style.PlaceContent>
              </Card>
            </Link>
          </Style.PlaceCardWrapper>
        ))}
      </ul>
    </Style.PlacesContainer>
  );
}

export default Places;
