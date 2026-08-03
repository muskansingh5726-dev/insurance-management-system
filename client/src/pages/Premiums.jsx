import Sidebar from "../components/Sidebar";

const payments = [
  {
    month: "January",
    amount: "₹999",
    status: "Paid",
  },
  {
    month: "February",
    amount: "₹999",
    status: "Paid",
  },
  {
    month: "March",
    amount: "₹999",
    status: "Pending",
  },
];

function Premiums() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-8">
          Premium Payments
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3">Month</th>

                <th>Amount</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {payments.map((payment, index) => (

                <tr key={index} className="border-b">

                  <td className="p-4">{payment.month}</td>

                  <td>{payment.amount}</td>

                  <td>{payment.status}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

export default Premiums;