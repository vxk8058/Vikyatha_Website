import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-gray-950 py-24 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Get In Touch
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Let&apos;s collaborate on your next project
          </p>

          <div className="mt-12 h-px w-24 mx-auto bg-linear-to-r from-transparent via-fuchsia-500/50 to-transparent" />
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-semibold text-blue-300">
                Let&apos;s talk
              </h3>

              <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities.
                Reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:vikcloud09@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl border border-gray-800 hover:border-blue-500/70 bg-gray-950/40 hover:bg-gray-900/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-gray-500">Email</p>
                  <p className="text-gray-200 truncate">vikcloud09@gmail.com</p>
                </div>

                <div className="ml-auto h-8 w-px bg-fuchsia-500/30" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/vxk8058"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-gray-800 hover:border-blue-500/70 bg-gray-950/40 hover:bg-gray-900/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-300">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-gray-500">GitHub</p>
                  <p className="text-gray-200 truncate">github.com/vxk8058</p>
                </div>
                <div className="ml-auto h-8 w-px bg-fuchsia-500/30" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/vikyatha-komandla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-gray-800 hover:border-blue-500/70 bg-gray-950/40 hover:bg-gray-900/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-300">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-gray-500">LinkedIn</p>
                  <p className="text-gray-200 truncate">linkedin.com/in/vikyatha-komandla</p>
                </div>
                <div className="ml-auto h-8 w-px bg-fuchsia-500/30" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-5 rounded-xl border border-gray-800 bg-gray-950/40">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-gray-500">Location</p>
                  <p className="text-gray-200 truncate">Hickory Creek, TX</p>
                </div>
                <div className="ml-auto h-8 w-px bg-fuchsia-500/30" />
              </div>
            </div>
          </div>

          {/* Right: Contact Form (more “card-like” with spacing + subtle pink accent) */}
          <div className="relative rounded-2xl border border-blue-500/30 bg-gray-900/40 p-8 md:p-10">
            {/* pink glow accent like the example, but subtle */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-r from-fuchsia-500/15 via-transparent to-blue-500/15 blur-xl opacity-70" />
            <div className="relative">
              <h3 className="text-2xl font-semibold text-blue-300">
                Send me a message
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                Tell me what you&apos;re building and what kind of help you need.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 rounded-xl bg-gray-950 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-gray-950 border border-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 text-white transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                {/* tiny accent line under button */}
                <div className="pt-2">
                  <div className="h-px w-full bg-linear-to-r from-fuchsia-500/40 via-blue-500/20 to-transparent" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16" />
      </div>
    </section>
  );
}
