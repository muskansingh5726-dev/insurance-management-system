import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-8">
          Forgot Password
        </h2>

        <form className="space-y-5">

          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full border rounded-lg p-3"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Send Reset Link
          </button>

        </form>

        <p className="mt-6 text-center">
          <Link
            to="/login"
            className="text-blue-600"
          >
            Back to Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;