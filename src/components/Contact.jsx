import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormValues((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("phone", formValues.phone);
    formData.append("message", formValues.message);
    formData.append("access_key", "f07ad0d5-e01c-417d-905d-0e093946b2e2");
    formData.append("from_name", "AMRF Website");
    formData.append("subject", "Website Contact Form Submission");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // Reset the form on success
        setFormValues({ name: "", email: "", phone: "", message: "" });
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-auto p-4 mt-5 md:mt-0 md:p-14 mb-10 font-ubuntu">
      <div className="w-full h-full">
        <div className="w-full flex flex-col items-center justify-center space-y-2 mb-6 md:mb-14">
          <h1 className="text-2xl md:text-3xl font-semibold">Contact Us</h1>
          <span className="text-sm md:text-base text-gray-500 text-center px-4">
            Have questions or feedback? Send us a message.
          </span>
        </div>

        <div className="w-full h-auto flex flex-col md:flex-row relative lg:px-20 xl:px-28">
          <div className="hidden md:block w-full md:w-1/2 h-80 md:h-[37rem] mx-10 relative z-10 -top-5 rounded-xl shadow-xl overflow-hidden">
            <img
              src="/contact.jpg"
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 h-auto bg-gray-50 mx-auto md:mx-10 md:-ml-24 relative z-20 p-6 md:p-8 flex flex-col justify-center space-y-6 rounded-xl shadow-xl">
            {isSubmitted ? (
              <div className="h-full w-full flex flex-col justify-center items-center space-y-5 p-7 md:10">
                <img src="/success.png" alt="" className="h-20" />
                <h1 className="text-3xl font-semibold">Thank You!</h1>
                <p className="text-center">
                  Your message has been successfully sent. We'll get back to you
                  as soon as possible.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl md:text-2xl font-medium">
                  Let's Chat, Reach Out to Us
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      className="w-full p-2.5 md:p-3 border border-gray-300 rounded-md focus:outline-none"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      className="w-full p-2.5 md:p-3 border border-gray-300 rounded-md focus:outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <PhoneInput
                      country={"ae"}
                      placeholder="Enter your phone number"
                      value={formValues.phone}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: "phone",
                        required: true,
                      }}
                      inputStyle={{
                        width: "100%",
                        height: "50px",
                        border: "1px solid #D1D5DB",
                        borderRadius: "0.375rem",
                        paddingLeft: "48px",
                      }}
                      buttonStyle={{
                        border: "none",
                        backgroundColor: "transparent",
                        marginLeft: "5px",
                        marginTop: "2px",
                        marginBottom: "5px",
                      }}
                      dropdownStyle={{
                        borderRadius: "0.375rem",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formValues.message}
                      onChange={handleInputChange}
                      className="w-full p-2.5 md:p-3 border border-gray-300 rounded-md focus:outline-none"
                      rows="4"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`relative w-full h-10 rounded-md text-white overflow-hidden group ${
                      isLoading ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    disabled={isLoading}
                  >
                    <span
                      className={`absolute inset-0 bg-[#CD4242] transform translate-x-0 group-hover:translate-x-full transition-transform duration-500`}
                    ></span>
                    <span
                      className={`absolute inset-0 bg-[#005BAA] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}
                    ></span>
                    {isLoading ? (
                      <span className="relative z-10 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V4a12 12 0 00-12 12h4z"
                          ></path>
                        </svg>
                      </span>
                    ) : (
                      <span className="relative z-10">Send Message</span>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
