import { useState, useMemo } from "react";
import { Navigate } from "react-router-dom";
import {
  MdEmail,
  MdLock,
  MdAnalytics,
  MdElectricMeter,
  MdSecurity,
  MdEco,
} from "react-icons/md";
import { FaDatabase, FaNetworkWired, FaBolt } from "react-icons/fa";

const floatingIcons = [
  MdAnalytics,
  MdElectricMeter,
  MdSecurity,
  MdEco,
  FaDatabase,
  FaNetworkWired,
  FaBolt,
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  // Generate random values only once
  const backgroundIcons = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      Icon: floatingIcons[Math.floor(Math.random() * floatingIcons.length)],
      size: Math.floor(Math.random() * 20) + 16,
      left: Math.floor(Math.random() * 100),
      delay: Math.random() * 10,
      duration: 5 + Math.random() * 10,
      opacity: 0.1 + Math.random() * 0.3,
      top: -Math.random() * 100
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    if (email === "nishant@gmail.com" && password === "12345") {
      setError("");
      setRedirect(true); // ✅ redirect to DashboardHome
    } else {
      setError("Invalid email or password");
    }
  };

  if (redirect) return <Navigate to="/portal" />;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* ===== Falling Icons Background ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {backgroundIcons.map((item) => (
          <item.Icon
            key={item.id}
            className="absolute text-green-400"
            style={{
              fontSize: `${item.size}px`,
              left: `${item.left}%`,
              top: `${item.top}px`,
              opacity: item.opacity,
              animation: `fall ${item.duration}s linear ${item.delay}s infinite`,
            }}
          />
        ))}

        {/* Glowing Blobs */}
        <div className="absolute -top-40 -left-32 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* ===== Login Card ===== */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-gray-800/70 border border-green-600/40 rounded-2xl shadow-2xl p-10">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-green-100 p-4 rounded-full shadow-md">
            <MdAnalytics className="text-green-700 text-4xl" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-100">
            Log in
          </h1>
          <p className="text-sm text-gray-300 mt-1 text-center">
            Meter Data Management (MDM)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nishant@gmail.com"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-gray-900/60 text-gray-100 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none bg-gray-900/60 text-gray-100 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="text-sm text-red-500 bg-red-900/20 border border-red-600 px-4 py-2 rounded-lg text-center">
              {error}
            </div>
          )}

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-500" />
              Remember me
            </label>
            <a href="#" className="text-green-400 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
          >
            Sign In
          </button>
        </form>

        {/* Demo */}
        <div className="mt-8 text-center text-xs text-gray-400">
          <p className="uppercase tracking-widest mb-2">Demo Credentials</p>
          <div className="inline-block bg-gray-800/60 border border-green-500 px-4 py-2 rounded-lg font-mono text-green-100">
            user: nishant@gmail.com <br />
            pass: 12345
          </div>
        </div>
      </div>

      {/* ===== Animations ===== */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-50px); opacity: 0; }
            10% { opacity: 0.2; }
            50% { opacity: 0.3; }
            100% { transform: translateY(110vh); opacity: 0; }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.2); opacity: 0.5; }
          }

          .animate-pulse {
            animation: pulse 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
