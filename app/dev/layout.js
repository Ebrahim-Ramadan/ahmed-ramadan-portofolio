import FixedDrawer from "@/components/globals/FixedDrawer";
import { RetroGrid } from "@/components/Landing/RetroGrid";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ebrahim Ramadan, this portfolio builder",
  description: "developed by Ebrahim Ramadan",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      <RetroGrid />
  
  <FixedDrawer/>
        {children}</body>
    </html>
  );
}
