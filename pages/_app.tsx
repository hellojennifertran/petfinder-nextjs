import "../styles/globals.css"; // If you have not yet installed TailwindCSS in the Next.js application, then consult the documentation for installing TailwindCSS in a Next.js application: https://tailwindcss.com/docs/guides/nextjs. 
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 py-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default App;