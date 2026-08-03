import {
  FaHome,
  FaUsers,
  FaFileContract,
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaUserCircle,
  FaPlusCircle,
  FaShieldAlt,
  FaSignOutAlt,
  FaHeadset,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const menu = [
    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/dashboard",
    },
    {
      title: "Customers",
      icon: <FaUsers />,
      path: "/customers",
    },
    {
      title: "Add Customer",
      icon: <FaPlusCircle />,
      path: "/add-customer",
    },
    {
      title: "Policies",
      icon: <FaFileContract />,
      path: "/policies",
    },
    {
      title: "Claims",
      icon: <FaFileInvoiceDollar />,
      path: "/claims",
    },
    {
      title: "Payments",
      icon: <FaMoneyBillWave />,
      path: "/payments",
    },
    {
      title: "Profile",
      icon: <FaUserCircle />,
      path: "/profile",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-slate-800">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-xl">

            <FaShieldAlt className="text-white text-3xl" />

          </div>

          <div>

            <h1 className="text-3xl font-black text-white">
              InsureHub
            </h1>

            <p className="text-slate-400 text-sm">
              Insurance Platform
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-8">

        {menu.map((item, index) => (

          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center gap-4 px-5 py-4 rounded-2xl mb-3 transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`
            }
          >

            <span className="text-xl group-hover:scale-110 transition-transform">

              {item.icon}

            </span>

            <span className="font-medium text-[16px]">

              {item.title}

            </span>

          </NavLink>

        ))}

      </nav>

      {/* Support Card */}

      <div className="px-5 mb-5">

        <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 p-5 shadow-xl">

          <div className="flex items-center gap-3 mb-3">

            <FaHeadset className="text-white text-2xl" />

            <h3 className="text-white font-bold text-lg">
              Need Help?
            </h3>

          </div>

          <p className="text-cyan-100 text-sm leading-6">
            Contact our support team if you need any assistance with policies,
            claims or payments.
          </p>

          <button className="mt-5 w-full bg-white text-blue-600 rounded-xl py-3 font-semibold hover:bg-slate-100 transition">

            Contact Support

          </button>

        </div>

      </div>

      {/* User Profile */}

      <div className="border-t border-slate-800 p-5">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">

            M

          </div>

          <div>

            <h3 className="text-white font-semibold">
              Muskan Singh
            </h3>

            <p className="text-slate-400 text-sm">
              Administrator
            </p>

          </div>

        </div>

        <button className="mt-5 w-full flex justify-center items-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl text-white font-semibold transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;