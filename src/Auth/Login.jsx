import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMail, HiLockClosed, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import logo from "../assets/sun.png";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "123") {
      setIsAuthenticated(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* 1. زر العودة - بتصميم جانبي أنيق لا يخرب التصميم العام */}
      <div className="absolute top-8 left-8 z-50">
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 group bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 text-gray-500 hover:text-[var(--color-maincolor)] transition-all"
        >
          <HiOutlineArrowNarrowLeft size={20} className="group-hover:text-[var(--color-secendcolor)] transition-colors" />
          <span className="text-sm font-bold tracking-tight">Home</span>
        </motion.button>
      </div>

      {/* 2. عناصر خلفية جمالية خفيفة */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-secendcolor)] opacity-[0.05] rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--color-maincolor)] opacity-[0.05] rounded-full blur-3xl" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        {/* اللوجو والعنوان */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-block p-4 bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 mb-6 border border-gray-50"
          >
            <img className="h-16 w-auto" src={logo} alt="SysteGo Admin" />
          </motion.div>
          <h2 className="text-3xl font-black text-[var(--color-maincolor)] tracking-tight">
            Admin Portal
          </h2>
          <p className="mt-2 text-sm text-gray-400 font-medium">
            Enter your credentials to access the console
          </p>
        </div>

        {/* كارت الدخول */}
        <div className="bg-white py-10 px-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-[2.5rem] border border-gray-100">
          <form className="space-y-5" onSubmit={handleLogin}>
            
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300 group-focus-within:text-[var(--color-maincolor)] transition-colors">
                  <HiMail size={20} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-gray-50 border-0 rounded-2xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[var(--color-maincolor)] focus:bg-white transition-all text-sm font-semibold"
                  placeholder="admin@gmail.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Password</label>
                <button type="button" className="text-[10px] font-bold text-[var(--color-maincolor)] hover:underline">Forgot?</button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-300 group-focus-within:text-[var(--color-maincolor)] transition-colors">
                  <HiLockClosed size={20} />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-gray-50 border-0 rounded-2xl ring-1 ring-gray-200 focus:ring-2 focus:ring-[var(--color-maincolor)] focus:bg-white transition-all text-sm font-semibold"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-red-600 text-[11px] font-bold bg-red-50 p-3 rounded-xl border border-red-100 text-center"
              >
                {error}
              </motion.div>
            )}

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full flex justify-center items-center py-4 px-4 rounded-2xl shadow-lg shadow-[var(--color-maincolor)]/20 text-sm font-black uppercase tracking-widest text-white bg-[var(--color-maincolor)] hover:brightness-110 transition-all mt-4"
            >
              Sign In to System
            </motion.button>
          </form>

          {/* Divider */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">
              <span className="bg-white px-4 italic">Security Level 4</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-[10px] font-bold text-gray-300 uppercase tracking-widest leading-loose">
          &copy; {new Date().getFullYear()} SysteGo Solutions <br/>
          Secure Infrastructure Internal Access
        </p>
      </motion.div>
    </div>
  );
};

export default Login;