import React, { useEffect } from "react";
import { Upload, Send, User, Mail, Phone, FileText } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Careers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // منطق إرسال البيانات هنا
    console.log("Form Submitted");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1 className="text-4xl font-black text-maincolor mb-4">Join Our Team</h1>
          <p className="text-therrtcolor font-medium">
            Be part of the green energy revolution. Submit your application below.
          </p>
          <div className="w-24 h-1 bg-secendcolor mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form Section */}
        <div 
          className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100"
          data-aos="zoom-in"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Your Name */}
              <div className="space-y-2">
                <label className="text-maincolor font-bold flex items-center gap-2">
                  <User className="w-4 h-4 text-secendcolor" /> Your Name (required)
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maincolor focus:ring-2 focus:ring-maincolor/20 outline-none transition-all bg-gray-50"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Your Email */}
              <div className="space-y-2">
                <label className="text-maincolor font-bold flex items-center gap-2">
                  <Mail className="w-4 h-4 text-secendcolor" /> Your Email (required)
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maincolor focus:ring-2 focus:ring-maincolor/20 outline-none transition-all bg-gray-50"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Your Phone */}
            <div className="space-y-2">
              <label className="text-maincolor font-bold flex items-center gap-2">
                <Phone className="w-4 h-4 text-secendcolor" /> Your Phone (required)
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maincolor focus:ring-2 focus:ring-maincolor/20 outline-none transition-all bg-gray-50"
                placeholder="01xxxxxxxxx"
              />
            </div>

            {/* Attach CV */}
            <div className="space-y-2">
              <label className="text-maincolor font-bold flex items-center gap-2">
                <Upload className="w-4 h-4 text-secendcolor" /> Attach Your CV (required)
              </label>
              <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-maincolor/5 transition-colors cursor-pointer group">
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-center">
                  <FileText className="w-10 h-10 text-gray-400 mx-auto mb-2 group-hover:text-maincolor transition-colors" />
                  <p className="text-sm text-gray-500">
                    <span className="text-maincolor font-bold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>
            </div>

            {/* More Details */}
            <div className="space-y-2">
              <label className="text-maincolor font-bold flex items-center gap-2">
                More Details
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-maincolor focus:ring-2 focus:ring-maincolor/20 outline-none transition-all bg-gray-50 resize-none"
                placeholder="Tell us more about your experience..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4" data-aos="fade-up" data-aos-delay="200">
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-maincolor text-white font-bold rounded-xl shadow-lg shadow-maincolor/30 hover:bg-maincolor/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Application
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center mt-8 text-gray-500 text-sm" data-aos="fade-up">
          Ecotech is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment.
        </p>
      </div>
    </div>
  );
};

export default Careers;