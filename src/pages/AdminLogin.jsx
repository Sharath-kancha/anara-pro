import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await signInWithEmailAndPassword(auth, email, password);

      navigate("/admin");
    } catch (error) {
      console.error("Admin login error:", error);
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-ivory-100 flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md bg-white rounded-3xl border border-sage-100 shadow-soft p-8 md:p-10">

        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-sage-600 mb-3">
            Anara Lifethread
          </p>

          <h1 className="font-serif text-3xl text-ink">
            Admin Login
          </h1>

          <p className="text-ink-muted mt-2">
            Sign in to manage customer enquiries.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-ink mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
              required
              className="w-full border border-sage-100 rounded-2xl px-4 py-3 outline-none focus:border-sage-600"
            />
          </div>

          <div>
            <label className="block text-sm text-ink mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full border border-sage-100 rounded-2xl px-4 py-3 outline-none focus:border-sage-600"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sage-600 hover:bg-sage-700 disabled:bg-sage-200 text-white rounded-full py-3.5 font-medium transition-colors"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}