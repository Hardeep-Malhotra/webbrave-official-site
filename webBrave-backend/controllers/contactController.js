import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully",
      contact,
    });

  } catch (error) {
  console.error("Create Contact Error:", error);

  return res.status(500).json({
    success: false,
    message: "Something went wrong."
  });
}
}