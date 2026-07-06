"use client";

import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import IconLink from "@/components/IconLink";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="m-6 max-w-xl">
      <h1 className="font-bold mb-2 text-3xl">Contact</h1>
      <p className="mb-4">Feel free to reach out!</p>

      <div className="flex items-center gap-4 mb-8">
        <IconLink href="mailto:laurenwyl@gmail.com" label="Email">
          <Mail size={24} />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/laurenwylee/" label="LinkedIn">
          <Linkedin size={24} />
        </IconLink>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="958cd76f-09b4-4ee7-be5a-7151aa182351" />

        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input id="name" name="name" type="text" required className="border border-gray-400 rounded px-3 py-2 bg-transparent outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required className="border border-gray-400 rounded px-3 py-2 bg-transparent outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="subject" className="text-sm font-medium">Subject</label>
          <input id="subject" name="subject" type="text" required className="border border-gray-400 rounded px-3 py-2 bg-transparent outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows={6} required className="border border-gray-400 rounded px-3 py-2 bg-transparent outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600" />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="self-start border border-gray-400 rounded px-4 py-2 font-medium hover:bg-green-600 hover:text-black hover:border-green-600 transition disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Send"}
        </button>

        {status === "success" && (
          <p className="text-green-600">Thanks! Your message has been sent.</p>
        )}
        {status === "error" && (
          <p className="text-red-500">Something went wrong. Please try again or email me directly.</p>
        )}
      </form>
    </div>
  );
}
