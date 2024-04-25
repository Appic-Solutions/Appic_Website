import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line
import "../styles/style.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AppIC DAO",
  description: "AppIC DAO, a revolutionary platform built on the Internet Computer (IC) ecosystem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="home-purple-gradient ">{children}</body>
    </html>
  );
}
