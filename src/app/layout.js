import Header from "@/components/layout/Header"; 
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400","500","700"] });

export const metadata = {
  title: "Alpha Imobiliária",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
