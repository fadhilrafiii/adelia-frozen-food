import type { AppProps } from 'next/app';

import { Inter } from '@next/font/google';

import Footer from 'components/footer';
import Navbar from 'components/navbar';

import { ClientContextProvider } from 'shared/context/client';
import useClient from 'shared/hooks/use-client';

import '../styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const App = ({ Component, pageProps }: AppProps) => {
  const clientState = useClient();

  return (
    <ClientContextProvider value={clientState}>
      <div className={inter.variable}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ClientContextProvider>
  );
};

export default App;
