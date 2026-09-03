import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Globe,
  Code2,
  MessageCircle,
  Send,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      );

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("Failed to send message.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="section-grid relative overflow-hidden bg-[#101412] px-6 py-24 text-[#f4f7f2] md:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-[#c9f36c]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="reveal mb-16 border-b border-[#dcffbc]/10 pb-10">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Let’s build something <em className="font-serif font-normal text-[#c9f36c]">useful.</em>
          </h2>

          <p className="text-base text-[#91a096] md:text-lg">
            Have a project in mind? Drop a message —
            I'll get back to you soon.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
          {/* Left Card */}
          <div className="professional-panel reveal reveal-delay-1 rounded-2xl p-8">
            <h3 className="mb-4 text-4xl font-bold text-white">
              Get in touch
            </h3>

            <p className="mb-10 text-base leading-7 text-[#91a096]">
              Open to opportunities, collaborations,
              and a good conversation.
            </p>

            <div className="mb-10 flex items-center gap-4 rounded-xl border border-[#dcffbc]/10 bg-[#151b17] p-4">
              <div className="rounded-xl bg-[#c9f36c] p-3">
                <Mail className="text-[#101412]" />
              </div>

              <div>
                <p className="text-sm text-[#91a096]">
                  Email
                </p>

                <p className="font-medium text-white">
                  rt28082002@gmail.com
                </p>
              </div>
            </div>

              <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-[#91a096]">
              FIND ME ON
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-xl border border-[#dcffbc]/10 p-3 text-[#91a096] transition hover:border-[#c9f36c] hover:text-[#c9f36c]"
              >
                <Globe />
              </a>

              <a
                href="#"
                className="rounded-xl border border-[#dcffbc]/10 p-3 text-[#91a096] transition hover:border-[#c9f36c] hover:text-[#c9f36c]"
              >
                <Code2 />
              </a>

              <a
                href="#"
                className="rounded-xl border border-[#dcffbc]/10 p-3 text-[#91a096] transition hover:border-[#c9f36c] hover:text-[#c9f36c]"
              >
                <MessageCircle />
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="professional-panel reveal reveal-delay-2 rounded-2xl p-8"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#91a096]">
                  NAME
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#dcffbc]/10 bg-[#151b17] px-5 py-4 text-white outline-none transition focus:border-[#c9f36c]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#91a096]">
                  EMAIL
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-[#dcffbc]/10 bg-[#151b17] px-5 py-4 text-white outline-none transition focus:border-[#c9f36c]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#91a096]">
                SUBJECT
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full rounded-xl border border-[#dcffbc]/10 bg-[#151b17] px-5 py-4 text-white outline-none transition focus:border-[#c9f36c]"
              />
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#91a096]">
                MESSAGE
              </label>

              <textarea
                rows="6"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl border border-[#dcffbc]/10 bg-[#151b17] px-5 py-4 text-white outline-none transition focus:border-[#c9f36c]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-8 flex items-center gap-3 rounded-full bg-[#c9f36c] px-7 py-3 font-bold text-[#101412] transition hover:-translate-y-1"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>

            {status && (
              <p className="mt-4 text-cyan-400">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}