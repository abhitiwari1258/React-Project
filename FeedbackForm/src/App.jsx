import { useState } from "react";
import laptop from "./assets/laptop.png";
import facebook from "./assets/facebook.png";
import whatsapp from "./assets/whatsapp.png";
import telegram from "./assets/telegram.png";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const [feedbackList, setFeedbackList] = useState([]);

  console.log(formData);
  console.log(feedbackList.length);

  const formValidation = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid";
    }
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.feedback) newErrors.feedback = "feedback is required";

    return newErrors;
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    formValidation();
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = formValidation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFeedbackList((prev) => [formData, ...prev]);

    setFormData({ name: "", email: "", subject: "", feedback: "" });
    setErrors({});
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center px-6 py-12">
        <div className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full">
          {/* LEFT SIDE - FORM */}
          <form onSubmit={handleSubmit} className="flex-1 p-10 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 text-center">
              Feedback Form
            </h1>

            {/* Name */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={onHandleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              />

              {errors.name && (
                <span className="text-[#d9534f] text-[0.85rem] mt-[0.2rem] block">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={onHandleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              />
              {errors.email && (
                <span className="text-[#d9534f] text-[0.85rem] mt-[0.2rem] block">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Subject */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="subject" className="font-medium text-gray-700">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={onHandleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              />
              {errors.subject && (
                <span className="text-[#d9534f] text-[0.85rem] mt-[0.2rem] block">
                  {errors.subject}
                </span>
              )}
            </div>

            {/* Feedback */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="feedback" className="font-medium text-gray-700">
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                rows="4"
                placeholder="Enter your feedback"
                value={formData.feedback}
                onChange={onHandleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition resize-none"
              ></textarea>
              {errors.feedback && (
                <span className="text-[#d9534f] text-[0.85rem] mt-[0.2rem] block">
                  {errors.feedback}
                </span>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 active:scale-95 transition duration-200"
            >
              Submit Feedback
            </button>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6 pt-4">
              <img
                src={facebook}
                alt="facebook"
                className="w-8 hover:scale-110 transition cursor-pointer"
              />
              <img
                src={whatsapp}
                alt="whatsapp"
                className="w-8 hover:scale-110 transition cursor-pointer"
              />
              <img
                src={telegram}
                alt="telegram"
                className="w-8 hover:scale-110 transition cursor-pointer"
              />
            </div>
          </form>

          {/* RIGHT SIDE - IMAGE */}
          <div className="hidden lg:flex flex-1 bg-indigo-500 items-center justify-center p-10">
            <img src={laptop} alt="laptop" className="w-80 drop-shadow-2xl" />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6">
        {/* Submitted Feedback Section */}
        {feedbackList.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Submitted Feedback
            </h3>

            <div className="space-y-4">
              {feedbackList.map((feedback, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">
                        {feedback.name}
                      </p>
                      <p className="text-sm text-gray-500">{feedback.email}</p>
                    </div>

                    <span className="bg-indigo-100 text-indigo-600 text-sm px-3 py-1 rounded-full">
                      ⭐ {feedback.subject}
                    </span>
                  </div>

                  <p className="mt-3 text-gray-700 text-sm">
                    {feedback.feedback}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
