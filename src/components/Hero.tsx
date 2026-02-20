"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/profile.png"
          alt="profile"
          width={160}
          height={160}
          className="rounded-full mx-auto mb-6 border border-white/20"
        />

        <h1 className="text-5xl font-bold">Santanu Konwar</h1>
        <p className="text-gray-400 mt-4">
          Creative Developer • UI Builder • Animator
        </p>
      </motion.div>
    </section>
  );
}
import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-center py-20">
      <Image
        src="/1771402479153.jpeg"
        alt="Santanu Konwar"
        width={180}
        height={180}
        className="rounded-full border border-white/20 mx-auto"
        priority
      />

      <h1 className="text-5xl font-bold mt-6">Santanu Konwar</h1>
      <p className="text-gray-400 mt-2">Creative Developer</p>
    </div>
  );
}
