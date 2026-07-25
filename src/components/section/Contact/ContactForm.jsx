import { useState } from "react";

const ContactForm = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0D1727] border border-[#1B2A3D] rounded-xl p-8"
    >

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400"
          required
        />

      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="w-full mt-5 bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400"
      />

      <textarea
        rows="6"
        name="message"
        placeholder="Write your message..."
        value={form.message}
        onChange={handleChange}
        className="w-full mt-5 bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none resize-none focus:border-yellow-400"
      />

      <button
        type="submit"
        className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold transition"
      >
        Send Message
      </button>

    </form>
  );
};

export default ContactForm;