function Login() {
  return (
    <div className="login-page min-h-screen bg-[linear-gradient(170deg,rgba(107,46,176,1)_42%,rgba(253,187,45,1)_100%)] flex items-center justify-center">
      <div className="main-container  w-full max-w-7xl min-h-[650px] grid grid-cols-2 rounded-3xl overflow-hidden bg-[#130B1F] shadow-2xl ">
        {/* Left Section */}
        <div className="left-section text-[#FFFFFF] p-4">
          {/* logo */}
          <div className="logo">
            <img src="/images/logo.png" alt="logo image" height={150} width={250}/>
          </div>

          {/* heading */}
          <div className="pt-7 ml-7">
            <h1 className="text-5xl font-semibold tracking-wide">
              Your <br/>
              <span className="text-[#7d32c7]">Music</span> Library <br/>
              Anywhere
            </h1>

            {/* Description */}
            <p className="text-[#A99DB5] mt-3">
              Discover, play and enjoy your <br/> favorite songs.
            </p>
          </div>

          {/* image */}
          <div className="ml-40">
            <img src="/images/headphone.png" alt="" height={270} width={320}/>
          </div>

          {/* Feature */}
          <div className="flex justify-around mt-6">
            {/* listen */}
            <div className="flex gap-3">
              <img src="/images/listen.png" alt="" className="rounded-full" width={35}/>
              <div>
                <h3>Listen</h3>
                <p className="text-[#A99DB5]">Your favorite music</p>
              </div>
              
            </div>

            {/* Dicover */}
            <div className="flex gap-3">
              <img src="/images/discover.png" alt="" height={10} width={40}/>
              <div>
                <h3>Discover</h3>
                <p className="text-[#A99DB5]">New artists</p>
              </div>
              
            </div>

            {/* Enjoy */}
            <div className="flex gap-3">
              <img src="/images/enjoy.png" alt=""  width={40}/>
              <div>
                <h3>Enjoy</h3>
                <p className="text-[#A99DB5]">Anytime anywhere</p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section bg-[#141412] text-[#FFFFFF] flex justify-center items-center">
        <div className="">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold tracking-wide mb-1">Welcome Back</h1>
            <p className="text-[#A99DB5] tracking-normal">Login to continue to VibeBox</p>
          </div>
        

         {/* Login Form */}
        
          <form action="">
            <label htmlFor="email">Email</label><br/>
            <input type="email" name="email" id="email" placeholder="Enter your email" className="bg-[#282828] w-80 p-2 text-sm rounded-sm mb-4 mt-0.5"/>
            <br/>
            <label htmlFor="password">Password</label><br/>
            <input type="password" name="password" id="password" placeholder="Enter your password" className="bg-[#282828] w-80  rounded-sm p-2 text-sm mt-0.5"/>

            <p className="text-[#a660ec] hover:text-[#6407bb] text-end mt-0.5 mb-4"><a href="#">Forget password?</a></p>

            <button type="submit" className="bg-[#760be1] w-80 h-9 rounded-lg hover:bg-[#6407bb]">Login</button>
          </form>

          <p className="text-[#A99DB5] text-sm mt-4 mb-4">----------------------------- OR --------------------------------</p>

          <p className="text-center">Don't have an account? <span className="
          text-[#8138ca] hover:text-[#6209ba]
          "> <a href="/register">Register</a></span> </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login