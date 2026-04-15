"use client";

import { useEffect, useState } from "react";

export default function ComingSoon() {
  const targetDate = new Date("2026-04-31T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    return {
      total: distance,
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / 1000 / 60) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 text-center">
      
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        TechVision LMS - Coming Soon
      </h1>

      <p className="text-gray-400 max-w-xl mb-10">
        We're building a marketplace where you can hire expert instructors
        to create high-quality courses for your platform.
      </p>

      {/* Countdown */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
          const values = [
            timeLeft.days,
            timeLeft.hours,
            timeLeft.minutes,
            timeLeft.seconds,
          ];

          return (
            <div
              key={i}
              className="bg-gray-800 px-6 py-8 rounded-2xl shadow-lg"
            >
              <p className="text-3xl font-bold text-blue-500">
                {values[i] < 0 ? 0 : values[i]}
              </p>
              <p className="text-gray-400 mt-2">{label}</p>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <button className="bg-blue-600 px-8 py-3 rounded-xl text-lg hover:bg-blue-700">
        Notify Me
      </button>

      {/* Footer */}
      <p className="mt-10 text-gray-500 text-sm">
        Launching soon on TechVision LMS 🚀
      </p>
    </main>
  );
}