import { useState } from "react";
import { createContact } from "../../../services/contactService";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await createContact(form);

      alert(data.message);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
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
        required
      />

      <button
        type="submit"
        disabled={loading}
        className={`mt-6 w-full py-3 rounded-lg font-semibold transition duration-300 ${
          loading
            ? "bg-gray-500 cursor-not-allowed text-white"
            : "bg-yellow-400 hover:bg-yellow-500 text-black"
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
