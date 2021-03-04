import { ChakraProvider } from '@chakra-ui/react';

import customTheme from '../theme';
import { AppProps } from 'next/app';
import { Fonts } from '../utils/CustomFonts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
