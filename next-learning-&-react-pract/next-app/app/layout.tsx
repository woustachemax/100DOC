import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-amber-800">
          ma chuda
        </div>
        {children}
      </body>
    </html>
  );
}
