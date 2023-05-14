import type { AppProps } from 'next/app'
import '../styles/global.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  useEffect(() => {
    scroll();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

const scroll = () => {
  const body = document.body;
  const scrollAmount = window.pageYOffset / 10;

  body.style.backgroundPosition = `0px -${scrollAmount}px`;

  window.requestAnimationFrame(scroll);
};

