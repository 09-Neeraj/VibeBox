function Login() {
  return (
    <div className="login-page">
      <div className="main-container">
        {/* Left Section */}
        <div className="left-section">
          {/* logo */}
          <div className="logo">
            <img src="/public/images/logo.png" alt="logo image" />
          </div>

          {/* heading */}
          <div className="hero-content">
            <h1>
              Your <br/>
              <span>Music</span> Library <br/>
              Anywhere
            </h1>

            {/* Description */}
            <p>
              Discover, play and enjoy your favorite songs.
            </p>
          </div>

          {/* image */}
          <div className="hero-image">
            <img src="/public/images/headphone.png" alt="" />
          </div>

          {/* Feature */}
          <div className="feature">
            {/* listen */}
            <div className="listen">
              <img src="" alt="" />
              <h3>Listen</h3>
              <p>Your favorite music</p>
            </div>

            {/* Dicover */}
            <div className="discover">
              <img src="" alt="" />
              <h3>Discover</h3>
              <p>New artists</p>
            </div>

            {/* Enjoy */}
            <div className="enjoy">
              <img src="" alt="" />
              <h3>Enjoy</h3>
              <p>Anytime anywhere</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="welcome">
            <h1>Welcome Back</h1>
            <p>Login to continue VibeBox</p>
          </div>
        </div>

        {/* Login Form */}
        <div className="login-form">
          <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email"/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" />

            <p>Forget password?</p>

            <button type="submit" className="login-btn">Login</button>
          </form>

          <p>-------- OR ----------</p>

          <p>Don't have an account? <span>Register</span> </p>
        </div>
      </div>

    </div>
  );
}

export default Login