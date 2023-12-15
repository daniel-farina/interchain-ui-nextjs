'use client';
import { Inter } from 'next/font/google'
import './globals.css'
// This is a global CSS reset, optional
import '@interchain-ui/react/globalStyles';
// This is all components styles
import '@interchain-ui/react/styles';
import { ThemeProvider, useTheme } from '@interchain-ui/react';


const inter = Inter({ subsets: ['latin'] })


const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { theme, themeClass, setTheme } = useTheme();
  return (
      <html>
       <body>
       <ThemeProvider>
          <main className={themeClass}>
              {children}
          </main>
      </ThemeProvider>
       </body>
      </html>
  );
};

export default RootLayout;