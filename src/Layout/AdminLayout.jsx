import { useState } from "react";
import { Outlet, Navigate, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineViewGrid,
  HiOutlineUserCircle,
  HiOutlineDocumentText,
  HiOutlineLogout,
  HiChevronLeft,
  HiMenuAlt2,
} from "react-icons/hi";
import logo from "../assets/sun.png";
import { FaUserCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const AdminLayout = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
const navigate = useNavigate();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsAuthenticated(false);
    navigate("/");
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <HiOutlineViewGrid size={22} />,
    },
    {
      name: "Profile",
      path: "/admin/profile",
      icon: <HiOutlineUserCircle size={22} />,
    },
    {
      name: "Forms",
      path: "/admin/form",
      icon: <HiOutlineDocumentText size={22} />,
    },
  ];

  return (
    <div className="min-h-screen flex bg-[#F3F4F6]">
      {/* Sidebar Container */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? "80px" : "260px" }}
        className="relative bg-[var(--color-maincolor)] text-white shadow-2xl z-50 flex flex-col"
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-10 bg-[var(--color-secendcolor)] text-[var(--color-maincolor)] w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-transform"
        >
          <motion.div animate={{ rotate: isCollapsed ? 180 : 0 }}>
            <HiChevronLeft size={14} />
          </motion.div>
        </button>

        {/* Branding Area */}
        <div className="p-1 flex items-center gap-1 overflow-hidden whitespace-nowrap">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 flex-shrink-0  rounded-lg p-1"
          />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-black text-xl tracking-tighter"
              >
                ECOTECH{" "}
                <span className="text-[var(--color-secendcolor)]">PRO</span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 mt-6 px-3 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? "bg-[var(--color-secendcolor)] text-[var(--color-maincolor)] font-bold shadow-lg"
                    : "hover:bg-white/10 text-blue-100"
                }`}
              >
                <div
                  className={`${
                    isActive
                      ? "text-[var(--color-maincolor)]"
                      : "text-[var(--color-secendcolor)]"
                  }`}
                >
                  {item.icon}
                </div>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm tracking-wide"
                  >
                    {item.name}
                  </motion.span>
                )}
                {isCollapsed && (
                  <div className="absolute left-20 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                    {item.name}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 w-full p-3 text-red-300 hover:bg-red-500/10 rounded-xl transition-colors group"
          >
            <HiOutlineLogout size={22} className="group-hover:text-red-400" />
            {!isCollapsed && <span className="text-sm font-bold">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header Section */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-2 text-gray-500">
            <HiMenuAlt2 size={20} className="md:hidden" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Admin Panel /{" "}
              <span className="text-[var(--color-maincolor)]">
                {location.pathname.split("/").pop()}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">

            </div>
            <button  className="w-10 h-10 bg-gray-100 rounded-full border border-gray-200 flex items-center justify-center">
              <FaUserCheck size={24} className="text-secendcolor" />
            </button>
          </div>
        </header>

        {/* Content Outlet */}
        <main className="flex-1 overflow-y-auto p-8 bg-[#F8FAFB]">
          <div className="max-w-[1400px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
