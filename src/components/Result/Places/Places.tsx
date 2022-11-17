import Image from 'next/image';
import { Card } from '@components/common';
import { IPlaces } from '@/types/result';
import * as Style from './Place.style';
import Link from 'next/link';

interface IPlaceProps {
  places: IPlaces[];
}

function Places({ places }: IPlaceProps) {
  return (
    <Style.PlacesContainer>
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
