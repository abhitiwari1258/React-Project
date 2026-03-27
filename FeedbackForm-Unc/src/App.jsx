import { useRef, useState } from "react";
import "./App.css";
import facebook from "./assets/facebook.png";
import whatsapp from "./assets/whatsapp.png";
import telegram from "./assets/telegram.png";
import laptop from "./assets/laptop.png";

function App() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const [feedbackList, setFeedbackList] = useState([]);
  const [errors, setErrors] = useState({});

  const validate = (register)=>{
    const newErr = {}
    if(!register.name) newErr.name = "Name is required";
    if(!register.email) newErr.email = "Email is required";
    if(!register.password) newErr.password = "Password is required";

    if(!register.confirmPassword ) newErr.confirmPassword = "ConfirmPassword is required";
    if(register.confirmPassword !== register.password) newErr.confirmPassword = "password and confirm password not same"

    return newErr
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    const register = {
      name: nameRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
      confirmPassword: confirmPasswordRef.current.value.trim()
    }

    const validationError = validate(register)
    if(Object.keys(validationError).length > 0){
      setErrors(validationError)
      return
    }

    setFeedbackList((prev) => [register, ...prev]);
    setErrors({});

    console.log(register);

    nameRef.current.value = ''
    emailRef.current.value = ''
    passwordRef.current.value = ''
    confirmPasswordRef.current.value = ''
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 flex items-center justify-center px-6 py-12">
        <div className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full">
          <form onSubmit={handleSubmit} className="flex-1 p-10 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 text-center">
              Please Fill out Form to Register!
            </h1>

            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="font-medium text-gray-700">
                Name:
              </label>

              <input
                type="text"
                ref={nameRef}
                placeholder="Enter Name"
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email:
              </label>

              <input
                type="email"
                placeholder="Enter Email"
                ref={emailRef}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter Password"
                ref={passwordRef}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="font-medium text-gray-700">
                Confirm Password :
              </label>

              <input
                type="password"
                placeholder="Enter Confirm Password"
                ref={confirmPasswordRef}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 active:scale-95 transition duration-200"
            >
              Submit Feedback
            </button>

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
                      ⭐ {feedback.password}
                    </span>
                  </div>

                  <p className="mt-3 text-gray-700 text-sm">
                    {feedback.confirmPassword}
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
