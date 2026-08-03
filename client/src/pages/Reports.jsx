import Sidebar from "../components/Sidebar";

function Reports() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-8">
          Reports & Analytics
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 h-80 flex items-center justify-center">
            <h2 className="text-gray-500 text-xl">
              📈 Policy Statistics Chart
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 h-80 flex items-center justify-center">
            <h2 className="text-gray-500 text-xl">
              💰 Premium Collection Chart
            </h2>
          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Business Summary
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div>
              <h3 className="text-gray-500">
                Total Customers
              </h3>

              <p className="text-3xl font-bold text-blue-600">
                1,250
              </p>
            </div>

            <div>
              <h3 className="text-gray-500">
                Active Policies
              </h3>

              <p className="text-3xl font-bold text-green-600">
                245
              </p>
            </div>

            <div>
              <h3 className="text-gray-500">
                Claims
              </h3>

              <p className="text-3xl font-bold text-red-500">
                18
              </p>
            </div>

            <div>
              <h3 className="text-gray-500">
                Revenue
              </h3>

              <p className="text-3xl font-bold text-purple-600">
                ₹18.4L
              </p>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Reports;