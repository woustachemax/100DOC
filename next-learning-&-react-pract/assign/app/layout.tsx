import Nav from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Nav/>
        </div>
        {children}
      </body>
    </html>
  );
}
