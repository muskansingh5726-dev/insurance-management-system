import {
  FaUserPlus,
  FaFileContract,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaUserPlus />,
    title: "New Customer Registered",
    time: "5 mins ago",
    color: "text-cyan-400",
  },
  {
    icon: <FaFileContract />,
    title: "Policy Created",
    time: "20 mins ago",
    color: "text-purple-400",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Premium Paid",
    time: "45 mins ago",
    color: "text-green-400",
  },
  {
    icon: <FaCheckCircle />,
    title: "Claim Approved",
    time: "1 hour ago",
    color: "text-orange-400",
  },
];

function RecentActivities() {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-7 h-full">

      <h2 className="text-2xl font-bold text-white mb-8">
        Recent Activities
      </h2>

      <div className="space-y-6">

        {activities.map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-4 border-b border-slate-800 pb-4"
          >

            <div
              className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-xl ${item.color}`}
            >
              {item.icon}
            </div>

            <div>

              <h3 className="text-white font-semibold">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm">
                {item.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentActivities;