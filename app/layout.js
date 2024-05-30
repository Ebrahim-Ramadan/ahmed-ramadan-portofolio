import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import FixedDrawer from "@/components/globals/FixedDrawer";
import Header from "@/components/globals/Header";
import { RetroGrid } from "@/components/Landing/RetroGrid";
import { Footer } from "@/components/footer/Footer";

export const metadata = {
  title: "Ahmed Ramadan",
  description: "Ahmed Ramadan portfolio, 3-year experienced junior architect",
};

export default function RootLayout({ children }) {
  return (
<html lang="en">

        <body className={GeistSans.className}>
          <Header />
      <RetroGrid />
          
  <FixedDrawer/>
        {children}
  <Footer/>
        
</body>
</html>
    
  );
}
