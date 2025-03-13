import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
            integrity="sha512-XXXXXXXXXXXXXX"  // replace X's with actual integrity hash if needed
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-sky-700 py-8">
            <div className="container mx-auto px-4 text-center text-gray-400">
              <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="hover:text-white">About Us</a>
                <a href="#" className="hover:text-white">Services</a>
                <a href="#" className="hover:text-white">Contact</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
              </div>
              <p className="mb-4">&copy; {new Date().getFullYear()} Welth. All rights reserved.</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
