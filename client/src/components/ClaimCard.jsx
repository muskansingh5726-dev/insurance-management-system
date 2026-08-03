function ClaimCard({ claim }) {
  return (
    <div className="bg-white shadow rounded-xl p-5">

      <h2 className="text-lg font-bold">
        Claim #{claim?.id}
      </h2>

      <p>Amount : ₹ {claim?.claimAmount}</p>

      <p>Status : {claim?.status}</p>

    </div>
  );
}

export default ClaimCard;