import "./globals.css";
import { Toaster } from 'sonner';
import { GeistSans } from 'geist/font/sans';
import FixedDrawer from "@/components/globals/FixedDrawer";
import { Footer } from "@/components/footer/Footer";
import { ViewTransitions } from 'next-view-transitions'

export const metadata = {
  title: "Ahmed Ramadan",
  description: "Ahmed Ramadan portfolio, 3-year experienced junior architect",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
<html lang="en">

<body className={GeistSans.className}>
  <FixedDrawer/>
  {children}
  <Toaster />
  <Footer/>
</body>
</html>
    </ViewTransitions>
    
  );
}
