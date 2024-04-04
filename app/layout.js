import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/Footer";
export const metadata = {
  title: "Arrest India",
  description: "Search crime data of indian pepole using there name, Aadhar number, State, Mobile Number and other Details",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
