"use client";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState } from "react";

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!executeRecaptcha) return setMessage("reCAPTCHA not ready");

    const token = await executeRecaptcha("submit_form");

    const res = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const result = await res.json();
    if (result.success && result.score > 0.5) {
      setMessage("✅ Human verified. Proceed.");
    } else {
      setMessage("🚫 Bot or suspicious activity.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow-md transition hover:bg-blue-700"
      >
        Submit
      </button>
      <p className="text-sm text-gray-600">{message}</p>
    </form>
  );
}
