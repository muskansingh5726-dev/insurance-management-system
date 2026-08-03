function PolicyCard({ policy }) {
  return (
    <div className="bg-white shadow rounded-xl p-5">

      <h2 className="font-bold">
        {policy?.policyType}
      </h2>

      <p>
        Policy No : {policy?.policyNumber}
      </p>

      <p>
        Premium : ₹ {policy?.premium}
      </p>

    </div>
  );
}

export default PolicyCard;