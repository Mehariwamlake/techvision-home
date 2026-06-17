import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "TechVision",
  description: "ERP, HR and LMS Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}