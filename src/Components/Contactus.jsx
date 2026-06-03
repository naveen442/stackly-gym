import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(`Message sent!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <p
            className="text-sm font-bold tracking-widest uppercase mb-6"
            style={{ color: "#e8192c" }}
          >
            CONTACT US
          </p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase text-gray-900 leading-tight mb-1">
            GET IN TOUCH
          </h2>
          <h2
            className="text-4xl sm:text-5xl font-black uppercase leading-tight"
            style={{ color: "#e8192c" }}
          >
            REACH OUT TO US
          </h2>
        </div>

        {/* Right Side — Form */}
        <div className="flex flex-col gap-8">

          {/* Name Field */}
          <div className="flex flex-col">
            <label
              className="text-sm font-semibold tracking-widest text-gray-700 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="border-0 border-b border-gray-400 bg-transparent pb-2 text-gray-900 text-base outline-none focus:border-gray-900 transition-colors duration-200 placeholder-transparent"
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label
              className="text-sm font-semibold tracking-widest uppercase text-gray-700 mb-2"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="border-0 border-b border-gray-400 bg-transparent pb-2 text-gray-900 text-base outline-none focus:border-gray-900 transition-colors duration-200 placeholder-transparent"
            />
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label
              className="text-sm font-semibold tracking-widest uppercase text-gray-700 mb-2"
              htmlFor="message"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="border-0 border-b border-gray-400 bg-transparent pb-2 text-gray-900 text-base outline-none focus:border-gray-900 transition-colors duration-200 resize-none placeholder-transparent"
            />
          </div>

          {/* Send Button */}
          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-4 text-white font-bold tracking-widest uppercase text-sm py-5 transition-opacity duration-200 hover:opacity-90 active:opacity-80"
            style={{ backgroundColor: "#e8192c" }}
          >
            SEND MESSAGE
            <span className="text-xl leading-none">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
