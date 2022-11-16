import type { AppProps } from 'next/app';

// lib
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClientProvider } from 'react-query';
import { queryClient } from '@react-query/queryClient';

// style
import GlobalStyle from '@styles/globalStyle';
import Font from '@styles/font';
import theme from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Font />
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
