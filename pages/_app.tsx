import type { AppProps } from 'next/app';

import { Inter } from '@next/font/google';

import Navbar from 'components/navbar';

import '../styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={inter.variable}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default App;
