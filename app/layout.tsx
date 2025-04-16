'use client'
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Bookzy"
// };

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
          <Navbar />
          <div className="flex-grow-1 d-flex">
            {children}
          </div>
        </div> */}
      </body>
    </html>
  );
}
