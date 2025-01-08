import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"


export default function RootLayout({children}) {
 return (
  <html lang="en" className={"${DejaVu.variable}"}>
   <body className="bg-gradient-to-b from-slate-900 to-slate-500">
    <Navbar />
    {children}
   </body>
  </html>
 );
}
