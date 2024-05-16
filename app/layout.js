import { Inter } from "next/font/google";
import "./globals.css";
// import { Toaster, toast } from 'sonner'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed Ramadan",
  description: "Ahmed Ramadan portfolio, 3-year experienced junior architect",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">

      <body className={inter.className}>
      {/* <Toaster /> */}
        {children}</body>
    </html>
  );
}
