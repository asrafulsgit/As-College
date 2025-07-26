import { Roboto, Lato } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "AS College",
  description: "A modern web platform for college students, teachers, and admins to manage classes, results, books, and announcements with ease.",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300','400', '500','600', '700','800','900'],  
  variable: '--font-roboto',
});
const lato = Lato({
  subsets: ['latin'],
  weight: ['300','400', '700','900'],
  variable: '--font-lato',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
