function DashboardCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-cyan-500 transition">

      <div className={`h-2 bg-gradient-to-r ${color}`}></div>

      <div className="p-8">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-slate-400">
              {title}
            </p>

            <h2 className="text-4xl font-black text-white mt-4">
              {value}
            </h2>

          </div>

          <div className="text-5xl text-white">
            {icon}
          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardCard;