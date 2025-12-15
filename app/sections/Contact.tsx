"use client";

import { useCallback, useMemo, useState, ReactNode } from "react";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";


const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""; // Using environment variable

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

        const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setErrorDetails("Please fill in all required fields.");
            setStatus("error");
            return;
          }

          setStatus("loading");
          setErrorDetails(null);

          try {
            const response = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
              setStatus("success");
              setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
              setStatus("error");
              setErrorDetails(result.error || "Failed to send message.");
            }
          } catch (err: any) {
            setStatus("error");
            setErrorDetails("Network error while sending message.");
          }
        },
        [formData]
      );

  return { formData, status, errorDetails, handleChange, handleSubmit };
};

type ContactLink = {
  icon: ReactNode;
  title: string;
  text: string;
  href?: string;
};

export default function Contact() {
  const { formData, status, errorDetails, handleChange, handleSubmit } = useContactForm();

  const contactLinks = useMemo<ContactLink[]>(() => [
    {
      icon: <Mail className="text-blue-400" size={20} />,
      title: "Email",
      text: "vaibhav.s.kharate@gmail.com",
      href: "mailto:vaibhav.s.kharate@gmail.com",
    },
    {
      icon: <Linkedin className="text-blue-400" size={20} />,
      title: "LinkedIn",
      text: "linkedin.com/in/vaibhavkharate",
      href: "https://linkedin.com/in/vaibhavkharate",
    },
    {
      icon: <Github className="text-blue-400" size={20} />,
      title: "GitHub",
      text: "github.com/vaibhavkharate",
      href: "https://github.com/vaibhavkharate",
    },
  ], []);

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Touch
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-4" />

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let’s discuss how I can help turn your data into actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8 w-full">
              <Card>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactLinks.map((item) => (
                    <ContactRow key={item.title} {...item} />
                  ))}
                  <ContactRow
                    icon={<MapPin className="text-blue-400" size={20} />}
                    title="Location"
                    text="India"
                  />
                </div>
              </Card>

              <Card secondary>
                <h3 className="text-xl font-bold text-white mb-4">
                  Let's Collaborate
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4">
                  I’m actively seeking entry-level opportunities where I can apply
                  my skills in SQL, Power BI, and Python to analyze data and support
                  business decision-making.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["Data Analytics", "Business Intelligence", "Reporting & Insights"].map(
                    (tag) => (
                      <Tag key={tag} text={tag} />
                    )
                  )}
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Card>
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {status === "success" && (
                <Alert type="success" icon={<CheckCircle className="text-green-400" size={20} />}>
                  Message sent successfully!
                </Alert>
              )}

              {status === "error" && (
                <Alert type="error">
                  Failed to send message.
                  {errorDetails && (
                    <>
                      <br />
                      <small className="whitespace-pre-wrap">{errorDetails}</small>
                    </>
                  )}
                  Please try again.
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 w-full">
                <FormInput
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />

                <FormInput
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@example.com"
                />

                <FormInput
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                />

                <FormTextarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project…"
                />

                <SubmitButton loading={status === "loading"} />
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const Card = ({ children, secondary = false }: any) => (
  <div
    className={
      "rounded-2xl p-8 w-full border backdrop-blur-sm " +
      (secondary
        ? "bg-gradient-to-br from-blue-900/20 to-slate-900/50 border-blue-500/20"
        : "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50")
    }
  >
    {children}
  </div>
);

const ContactRow = ({ icon, title, text, href }: ContactLink) => (
  <div className="flex items-start gap-4 group">
    <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]">
      {icon}
    </div>
    <div>
      <p className="text-gray-400 text-sm mb-1">{title}</p>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold hover:text-blue-400 transition-colors break-all"
        >
          {text}
        </a>
      ) : (
        <p className="text-white font-semibold break-all">{text}</p>
      )}
    </div>
  </div>
);

const Tag = ({ text }: { text: string }) => (
  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-300 text-sm font-medium transition-shadow hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] cursor-default">
    {text}
  </span>
);

const FormInput = ({ label, name, value, type = "text", onChange, placeholder }: any) => (
  <div className="w-full">
    <label htmlFor={name} className="block text-gray-300 font-medium mb-2">
      {label}
    </label>

    <input
      id={name}
      name={name}
      value={value}
      type={type}
      required
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
    />
  </div>
);

const FormTextarea = ({ label, name, value, onChange, placeholder }: any) => (
  <div className="w-full">
    <label htmlFor={name} className="block text-gray-300 font-medium mb-2">
      {label}
    </label>

    <textarea
      id={name}
      name={name}
      rows={5}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
    />
  </div>
);

const SubmitButton = ({ loading }: { loading: boolean }) => (
  <button
    type="submit"
    disabled={loading}
    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
  >
    {loading ? "Sending..." : (<><Send size={18} /> Send Message</>)}
  </button>
);

const Alert = ({ type, children, icon }: any) => (
  <div
    className={
      "mb-6 p-4 rounded-xl flex items-center gap-3 border " +
      (type === "success"
        ? "bg-green-500/10 border-green-500/20 text-green-400"
        : "bg-red-500/10 border-red-500/20 text-red-300")
    }
  >
    {icon}
    <p className="font-semibold">{children}</p>
  </div>
);
