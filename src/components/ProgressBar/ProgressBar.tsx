import Image from 'next/image';
import * as Style from './ProgressBar.style';
import { Progress, Grid } from '@nextui-org/react';

interface IProgressBarProps {
  status: string;
}

function ProgressBar({ status }: IProgressBarProps) {
  return (
    <Style.Container>
      <Grid.Container xs={15} md={20} xl={20}>
        <Grid>
          <Style.Description>{`${Number(status)}/10`}</Style.Description>
          <Style.Progressbar
            color="warning"
            value={Number(status) * 10}
            status="warning"
          >
            <Style.Test>
              <Image
                src="/assets/images/progressbar-icon.png"
                alt="progressbar icon"
                width={40}
                height={46}
              />
            </Style.Test>
          </Style.Progressbar>
        </Grid>
      </Grid.Container>
    </Style.Container>
  );
}

export default ProgressBar;
