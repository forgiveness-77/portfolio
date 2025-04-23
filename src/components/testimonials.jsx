import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "MAHINGA Rodin",
    role: "Software Engineer",
    text: "This service exceeded my expectations. The quality and attention to detail were phenomenal!",
    image: "/images/avatar.jpeg"
  },
  {
    id: 2,
    name: "MUGISHA Samuella",
    role: "Software Enginneer",
    text: "A fantastic experience from start to finish. Highly recommend!",
    image: "/images/avatar.jpeg"
  },
  {
    id: 3,
    name: "IRADUKUNDA Hope",
    role: "Designer",
    text: "She's extremely professional and delivers on time. Great job!",
    image: "/images/avatar.jpeg"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 relative">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Testimonials</h2>

      {/* Navigation Buttons */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 md:left-10 top-1/2 transform -translate-y-1/2 p-3 bg-gray-900 border border-gray-300 rounded-full transition"
      >
        <ChevronLeft size={30} className="text-gray-300" />
      </button>

      {/* Glassmorphic Testimonial Card */}
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-6 text-center">
        <div className="flex flex-col items-center">
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-16 h-16 rounded-full border-4 border-gray-900 shadow-md"
          />
          <p className="text-lg italic mt-4 text-white">
            "{testimonials[index].text}"
          </p>
          <h3 className="mt-4 text-xl font-semibold text-white">
            {testimonials[index].name}
          </h3>
          <span className="text-sm text-white">{testimonials[index].role}</span>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-gray-100 scale-125" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <button
        onClick={nextTestimonial}
        className="absolute right-0 md:right-10 top-1/2 transform -translate-y-1/2 p-3 bg-gray-900 border border-gray-300 rounded-full transition"
      >
        <ChevronRight size={30} className="text-gray-300" />
      </button>
    </div>
  );
};

export default Testimonials;
