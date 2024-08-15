

const SignUp = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black to-sky-950 flex justify-center items-center">
        <div className=" bg-gradient-to-b from-white to-cyan-200 px-20 py-20 rounded-3xl">
            <h1 className="text-black font-bold text-5xl">Welcome to DOOTS</h1>
            <p className="font-semibold text-lg mt-8">Please enter your credentials</p>
            <div className="mt-8">
            <div >
                    <label className="text-medium font-semibold">Username</label>
                    <input className="w-full border-2 rounded-xl p-4 mt-1" placeholder="Enter a valid username"/>
                </div>
                <div className="mt-4">
                    <label className="text-medium font-semibold">Email</label>
                    <input className="w-full border-2 rounded-xl p-4 mt-1" placeholder="Enter your email" type="email"/>
                </div>
                <div className="mt-4">
                    <label className="text-medium font-semibold">Password</label>
                    <input className="w-full border-2 rounded-xl p-4 mt-1" placeholder="Enter your password" type="password"/>
                </div>
            </div>
            <div className="mt-8 text-center text-white font-bold w-full">
                <button className="bg-cyan-600 py-4 px-6 mt-4 rounded-xl hover:scale-125 transform transition-transform duration-100">Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp