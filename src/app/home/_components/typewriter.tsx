"use client";
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  return (
    <section className="flex justify-center items-center text-3xl py-20 font-serif">
      <Typewriter
        words={["Welcome to Studybara!", "Connect. Study. Enjoy!"]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </section>
  );
}
