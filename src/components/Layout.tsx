import { ReactNode } from "react";
import Image from "next/image";
// import bg from "@/images/bg.jpg";
// import Footer from "./Footer";

export default function Layout({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <main className={`bg-white mx-auto font-google-reg ${className}`}>
      {children}

      {/* <Footer /> */}
    </main>
  );
}
