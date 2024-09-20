

import { roboto } from '@/app/_ui/theme';

import './globals.css';

export const metadata = {
  title: "CoWork Connect",
  description: "Empowering Startups, One Space at a Time!",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
