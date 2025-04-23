import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Notification = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // 3 seconds timeout
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div 
      className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg 
        ${type === 'success' 
          ? 'bg-green-500 text-white' 
          : 'bg-red-500 text-white'}`}
    >
      <div className="flex items-center space-x-2">
        <span>{message}</span>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.from_name.trim()) {
      newErrors.from_name = "Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous notification
    setNotification(null);

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Proceed with sending
    setIsSending(true);
    
    const serviceId = "service_q7jt6gf";
    const templateId = "template_52mhnir";
    const publicKey = "EGO1s4r24Ras1LGS_";

    emailjs
      .send(serviceId, templateId, {
        from_name: formData.from_name,
        email: formData.email,
        message: `EMAIL: ${formData.email}\nMESSAGE: ${formData.message}`
      }, publicKey)
      .then(() => {
        // Success
        setNotification({
          type: 'success',
          message: `Message sent successfully!`
        });
        
        // Reset form
        setFormData({
          from_name: "",
          email: "",
          message: ""
        });
      })
      .catch(() => {
        // Error
        setNotification({
          type: 'error',
          message: 'Failed to send message. Please try again.'
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const clearNotification = () => {
    setNotification(null);
  };

  return (
    <div className="py-12 px-4 sm:px-8">
      {notification && (
        <Notification 
          type={notification.type} 
          message={notification.message} 
          onClose={clearNotification}
        />
      )}

      <h1 id="contact" className="scroll-mt-20 text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Contact Me
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 py-10">
        {/* Illustration Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/contact.png"
            alt="Contact"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
        {/* Form Section */}
        <div className="w-full lg:w-1/2 max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                value={formData.from_name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-[rgb(25,28,32)] text-white border 
                  ${errors.from_name 
                    ? 'border-red-500' 
                    : 'border-gray-700 focus:border-primary'
                  } focus:outline-none transition`}
              />
              {errors.from_name && (
                <p className="text-red-500 text-sm mt-1">{errors.from_name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-[rgb(25,28,32)] text-white border 
                  ${errors.email 
                    ? 'border-red-500' 
                    : 'border-gray-700 focus:border-primary'
                  } focus:outline-none transition`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-3 rounded-lg bg-[rgb(25,28,32)] text-white border 
                  ${errors.message 
                    ? 'border-red-500' 
                    : 'border-gray-700 focus:border-primary'
                  } focus:outline-none transition`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <div className="flex justify-center lg:justify-end">
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-gradient1 to-gradient2 text-white py-3 px-6 rounded-lg hover:translate-y-1 transition duration-300 disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send"}
                <svg className="w-5 h-5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
