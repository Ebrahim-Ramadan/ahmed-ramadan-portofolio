import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed Ramadan | projects",
  description: "architectural projects deisgned by me throughtout my whole journey",
};

export default function Layout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
