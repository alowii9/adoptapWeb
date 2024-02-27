'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./componentes/Footer";
import { BrowserRouter as Router, Route, BrowserRouter} from "react-router-dom";


const inter = Inter({ subsets: ["latin"] });
/*
export const metadata: Metadata = {
  title: "Adoptapp",
  description: "Tesis Torres",
};
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <BrowserRouter>

     

          <html lang="en">
      
      <body className={inter.className}>{children}
     <Footer />
     <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-qFOQ9YFAeGj1gDOuUD61g3D+tLDv3u1ECYWqT82WQoaWrOhAY+5mRMTTVsQdWutbA5FORCnkEPEgU0OF8IzGvA=="></script>

      </body>
      
    </html>
    </BrowserRouter>
      
  
  );
}
