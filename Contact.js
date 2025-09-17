"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/your-form-id", { // TODO: Replace with your endpoint
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        setStatus("❌ Oops! Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("⚠️ Network error, please try later.");
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-20 px-6" id="contact">
      <h2 className="text-4xl font-bold text-center mb-6 text-cyan-400">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-gray-900 p-8 rounded-2xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full p-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 focus:ring-cyan-400"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-cyan-300 animate-pulse">{status}</p>
      )}
    </section>
  );
}
