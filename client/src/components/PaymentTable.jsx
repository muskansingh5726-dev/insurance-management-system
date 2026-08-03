function PaymentTable({ payments }) {
  return (
    <table className="w-full border">

      <thead className="bg-green-600 text-white">

        <tr>

          <th className="p-3">Amount</th>

          <th>Date</th>

          <th>Status</th>

        </tr>

      </thead>

      <tbody>

        {payments?.map((payment) => (

          <tr
            key={payment.id}
            className="border-b text-center"
          >

            <td className="p-3">
              ₹ {payment.amount}
            </td>

            <td>
              {new Date(payment.paymentDate).toLocaleDateString()}
            </td>

            <td>
              {payment.status}
            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default PaymentTable;