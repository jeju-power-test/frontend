import { Card } from '@components/common';
import Image from 'next/image';
import * as Style from './Place.style';
import { PLACES } from '../mock';

function Places() {
  return (
    <Style.PlacesContainer>
      <Style.PlacesTitle>추천 플레이스</Style.PlacesTitle>
      <ul>
        {PLACES.map((place) => (
          <Style.PlaceCardWrapper key={place.title}>
            <Card>
              <Image
                src="/assets/images/place-test.png"
                alt="test"
                width={316}
                height={175}
              />
              <Style.PlaceContent>
                <h2>{place.title}</h2>
                <p>{place.description}</p>
              </Style.PlaceContent>
            </Card>
          </Style.PlaceCardWrapper>
        ))}
      </ul>
    </Style.PlacesContainer>
  );
}

export default Places;
