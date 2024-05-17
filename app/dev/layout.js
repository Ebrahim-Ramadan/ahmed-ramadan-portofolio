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
        {children}</body>
    </html>
  );
}
