import * as Style from './ProgressBar.style';
import { Progress, Grid } from '@nextui-org/react';

import {} from 'recoil';
import { atom, useRecoilValue } from 'recoil';

export const progressBarState = atom({
  key: 'progressBar',
  default: 10 || '',
});

function ProgressBar() {
  return (
    <Style.Container>
      <Grid.Container xs={12} sm={6} gap={2}>
        <Grid>
          <Progress color="warning" value={10} status="warning" />
        </Grid>
      </Grid.Container>
    </Style.Container>
  );
}

export default ProgressBar;
