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
      {/* <Image
        src="/images/bg.jpg"
        width={1920}
        height={1080}
        alt="Grid bg"
        priority
        className="pointer-events-none object-cover absolute h-full top-0 left-0 z-10 opacity-50"
      /> */}

      <Image
        src="/images/stack1.png"
        width={500}
        height={860}
        alt="3D SDGs"
        priority
        className="pointer-events-none absolute top-0 -left-20 z-10 object-cover hidden lg:block"
      />

      <Image
        src="/images/stack2.png"
        width={740}
        height={1160}
        alt="3D SDGs"
        priority
        className="pointer-events-none absolute bottom-0 right-0 z-10 object-cover"
      />

      {/* <Footer /> */}
    </main>
  );
}
