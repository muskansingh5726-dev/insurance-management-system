import { FaChartLine } from "react-icons/fa";

function RevenueChart() {
  const months = [
    { month: "Jan", value: 40 },
    { month: "Feb", value: 60 },
    { month: "Mar", value: 55 },
    { month: "Apr", value: 75 },
    { month: "May", value: 90 },
    { month: "Jun", value: 80 },
  ];

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-7 h-full">

      <div className="flex items-center gap-3 mb-8">
        <FaChartLine className="text-cyan-400 text-xl" />
        <h2 className="text-2xl font-bold text-white">
          Revenue Overview
        </h2>
      </div>

      <div className="flex items-end justify-between h-64">

        {months.map((item) => (

          <div
            key={item.month}
            className="flex flex-col items-center gap-3"
          >

            <div
              className="w-10 rounded-t-xl bg-gradient-to-t from-cyan-500 to-blue-500"
              style={{
                height: `${item.value * 2}px`,
              }}
            />

            <span className="text-slate-400 text-sm">
              {item.month}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RevenueChart;