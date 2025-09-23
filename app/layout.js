import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata = {
  title: "TraderTalks | Where Traders connect ",
  description: "Your space to post, learn, and engage with trading ideas across forex, stock, and crypto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lora.className} antialiased`}
      ><AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
