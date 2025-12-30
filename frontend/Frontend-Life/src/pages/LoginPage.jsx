import sign from "../assets/signup.png"
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate=useNavigate();
    return(
    <section className=" relative min-h-screen flex items-center justify-center bg-cyan-50">
        <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${sign})` }}
              ></div>
      <div className=" relative w-full max-w-sm border-2 border-[#666868] inset-0 bg-linear-to-r from-[#0A1A2F]/95 via-[#0A1A2F]/90 to-transparent rounded-2xl b p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">
          Login
        </h2>

        <div className="flex flex-col space-y-1">
          <label className="text-white font-medium">Email</label>
          <input
            type="email"
            className="border rounded-lg px-3 py-2 text-white"
            placeholder="you@example.com"
          />






          
        </div> 332121

        <div className="flex flex-col space-y-1">
          <label className="text-white font-medium">Password</label>
          <input
            type="password"
            className="border rounded-lg px-3 py-2 text-white"
            placeholder="••••••••"
          />
        </div>

        <button className="w-full bg-blue-700 text-white py-2 rounded-xl">
          Log in
        </button>

        <p className="text-sm text-center text-white hover:underline cursor-pointer">
          Forgot Password?
        </p>
        <p 
      onClick={() => navigate("/signup")}
        className="text-sm text-center text-white hover:underline cursor-pointer">
          Not Registered?Click Here!
        </p>
      </div>
       </section>
    )

}
export default Login