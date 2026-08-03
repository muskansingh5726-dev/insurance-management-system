import { useEffect, useState } from "react";
import {
  FaSearch,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import API from "../api/client";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  async function fetchCustomers() {
    try {
      const res = await API.get("/customers");
      setCustomers(res.data);
    } catch (err) {
      console.error(err);
      alert("Unable to load customers");
    } finally {
      setLoading(false);
    }
  }

  const filteredCustomers = customers.filter((customer) =>
    customer.user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-10">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-5xl font-black text-white">
              Customers
            </h1>

            <p className="text-slate-400 mt-2">
              Real customers stored in PostgreSQL
            </p>

          </div>

        </div>

        <div className="relative mt-10 mb-10">

          <FaSearch className="absolute left-5 top-5 text-slate-500"/>

          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-14 pr-5 py-4 text-white outline-none focus:border-cyan-500"
          />

        </div>

        {loading ? (

          <h2 className="text-white text-xl">
            Loading Customers...
          </h2>

        ) : (

          <div className="grid lg:grid-cols-2 gap-6">

            {filteredCustomers.map((customer)=>(

              <div
                key={customer.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 transition"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h2 className="text-2xl font-bold text-white">
                      {customer.user.name}
                    </h2>

                    <p className="text-cyan-400">
                      {customer.user.role}
                    </p>

                  </div>

                  <div className="bg-cyan-500 text-white px-4 py-2 rounded-full">
                    #{customer.id}
                  </div>

                </div>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3 text-slate-300">

                    <FaEnvelope className="text-cyan-400"/>

                    {customer.user.email}

                  </div>

                  <div className="flex items-center gap-3 text-slate-300">

                    <FaPhone className="text-cyan-400"/>

                    {customer.phone}

                  </div>

                  <div className="flex items-center gap-3 text-slate-300">

                    <FaMapMarkerAlt className="text-cyan-400"/>

                    {customer.address}

                  </div>

                  <div className="flex items-center gap-3 text-slate-300">

                    <FaBirthdayCake className="text-cyan-400"/>

                    {new Date(customer.dob).toLocaleDateString()}

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </main>

    </div>
  );
}

export default Customers;