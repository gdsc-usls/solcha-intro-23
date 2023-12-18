import { FormEventHandler, useEffect, useState } from "react";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import localFont from "next/font/local";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { toast } from "sonner";
import Image from "next/image";

import { db } from "@/config/firebase";
import Modal from "@/components/Modal";
import Footer from "@/components/Footer";

const googleMedium = localFont({
  src: "../../public/fonts/Google-Sans-Medium.ttf",
  display: "swap",
  weight: "600",
  // variable: "--font-google-bold",
});

export default function Home() {
  const { push } = useRouter();

  const [warnModal, setWarnModal] = useState(false);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.match(/FBAN|FBAV/i)) {
      setWarnModal(true);
    }
  }, []);

  const handleLocate: FormEventHandler = async (e) => {
    e.preventDefault();

    const q = query(
      collection(db, "certificates/solcha23/for"),
      where("email", "==", email),
      limit(1)
    );

    try {
      setLoading(true);
      const querySnapshot = await getDocs(q);
      let message = "⚠️ No certificate found";

      querySnapshot.forEach((doc) => {
        if (doc.data().email) {
          push(`/cert/${doc.id}`);
          message = "✅ Certificate found!";
          return;
        }
      });

      toast(message);
      setLoading(false);
    } catch (err: any) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen pt-10 lg:pt-20 relative font-google-reg">
      <Modal
        title="In-app browser detected"
        description="To avoid running into issues, we recommend opening the certificate generator in an external browser."
        isOpen={warnModal}
        handleConfirm={{
          text: "Understood",
          fn: () => setWarnModal(false),
        }}
        onClose={() => null}
      />

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

      <div className="glassmorph min-h-[80vh] z-30 relative w-[90%] px-7 md:w-3/4 lg:w-2/3 mx-auto">
        <div className="gap-5 flex flex-col items-center py-32">
          <Image
            src="/images/main-logo.svg"
            width={300}
            height={200}
            alt="3D SDGs"
            priority
            className="scale-[0.6] md:scale-75 xl:scale-100"
          />

          <p className="text-center text-base md:text-xl xl:mt-4 mb-14">
            An Introduction to Google Solutions Challenge.
          </p>

          <form
            onSubmit={handleLocate}
            className="flex flex-col gap-2 mt-8 w-full sm:max-w-[400px] max-w-[350px] text-black"
          >
            <Input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
            <Button
              type="submit"
              disabled={loading}
              className={`cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] w-full disabled:cursor-not-allowed ${googleMedium.className}`}
            >
              Claim Certificate
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
}
