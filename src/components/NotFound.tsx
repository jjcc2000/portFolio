import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [swayY, setSwayY] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = container.getBoundingClientRect();
      const relativeY = e.clientY - bounds.top;
      const normalized = relativeY / bounds.height - 0.5;
      setSwayY(normalized * 100); // vertical sway
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="flex justify-center px-4 py-16 font-futuristic">
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-background shadow-lg"
      >
        <h1 className="text-center font-futuristic text-3xl text-neonYellow brightness-125 drop-shadow-[0_0_10px_#ffe600] sm:text-4xl">
          {" "}
          Nothing to show here!!
        </h1>

        {/* ✨ Star background */}
        <div className="animate-starScroll absolute inset-0 bg-[radial-gradient(#ffe60033_2px,transparent_1px)] bg-[size:30px_30px]" />

        {/* ☁️ Neon clouds */}
        <div className="animate-cloudDrift absolute left-0 top-1/3 h-20 w-[200%] rounded-full bg-neonPink/10 blur-2xl" />
        <div
          className="animate-cloudDrift absolute left-0 top-2/3 h-20 w-[200%] rounded-full bg-neonBlue/10 blur-2xl"
          style={{ animationDelay: "10s" }}
        />

        {/* 🌟 Twinkling stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="animate-twinkle absolute h-1 w-1 rounded-full bg-neonYellow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}

        {/* 🚀 Rocket (centered inside this container) */}
        <div className="relative flex h-64 items-center justify-center">
          <motion.img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjRwNzN1bzd0czB4dGppYnJ5ZWRueWdpcnAxZjYyN2Z4NnJpbDFxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BxkI1Pa1We5cjxQXey/giphy.gif"
            alt="Rocket"
            className="pointer-events-none h-24 w-24"
            animate={{ y: swayY }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
          />
        </div>
      </div>
    </section>
  );
}
