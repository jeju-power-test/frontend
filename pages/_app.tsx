import type { AppProps } from 'next/app';

// lib
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClientProvider } from 'react-query';
import { queryClient } from '@react-query/queryClient';
import { NextUIProvider } from '@nextui-org/react';
import { SSRProvider } from 'react-aria';

// style
import GlobalStyle from '@styles/globalStyle';
import Font from '@styles/font';
import theme from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <SSRProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Font />
              <Hydrate state={pageProps.dehydratedState}>
                <NextUIProvider>
                  <Component {...pageProps} />
                </NextUIProvider>
              </Hydrate>
            </ThemeProvider>
          </SSRProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
