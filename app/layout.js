import "./globals.css";
import { Toaster } from 'sonner';
import { GeistSans } from 'geist/font/sans';


export const metadata = {
  title: "Ahmed Ramadan",
  description: "Ahmed Ramadan portfolio, 3-year experienced junior architect",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">

      <body className={GeistSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}