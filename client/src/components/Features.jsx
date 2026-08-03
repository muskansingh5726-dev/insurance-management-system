function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">
              Policy Management
            </h3>

            <p>
              Create, renew and manage insurance policies with ease.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">
              Claim Tracking
            </h3>

            <p>
              Submit and monitor claim requests in real time.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">
              Premium Payments
            </h3>

            <p>
              Record and monitor premium payments securely.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;