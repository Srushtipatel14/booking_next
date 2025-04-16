import type { ReactNode } from "react";
import Navbar from "../homeScreen/navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
          <Navbar />
          <div className="flex-grow-1 d-flex">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
