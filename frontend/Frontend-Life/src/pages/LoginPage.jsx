

function Login(){
    return(
    <section className="min-h-screen flex items-center justify-center bg-cyan-50">
      <div className="w-full max-w-sm border-2 border-blue-500 rounded-2xl bg-white p-8 space-y-6">
        <h2 className="text-2xl font-bold text-blue-500 text-center">
          Login
        </h2>

        <div className="flex flex-col space-y-1">
          <label className="text-blue-500 font-medium">Email</label>
          <input
            type="email"
            className="border rounded-lg px-3 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-blue-500 font-medium">Password</label>
          <input
            type="password"
            className="border rounded-lg px-3 py-2"
            placeholder="••••••••"
          />
        </div>

        <button className="w-full bg-blue-700 text-white py-2 rounded-xl">
          Log in
        </button>

        <p className="text-sm text-center text-blue-600 hover:underline cursor-pointer">
          Forgot Password?
        </p>
      </div>
       </section>
    )

}
export default Login