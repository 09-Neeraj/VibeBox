import { PiMusicNotesLight } from "react-icons/pi";
import { HiOutlineHeart } from "react-icons/hi";
import { SlPeople } from "react-icons/sl";

function Register() {
     return(
    <div className="bg-[#1e063e] h-screen  flex items-center justify-center">
      {/* Container */}
      <div className="bg-[url('/images/background.png')]  w-full max-w-7xl min-h-[650px] rounded-3xl  shadow-2xl  text-[#FFFFFF] flex justify-around">
        {/* left container */}
        <div>
          <div className="logo">
            <img src="/images/logo.png" alt="logo image" height={150} width={250}/>
          </div>
          {/* heading content */}
          <div className="pt-7 ml-7">
            <h1 className="text-5xl font-semibold tracking-wide">Join the <br/>
              <span className="text-[#7d32c7]">Music</span> Community
            </h1>
            <p className="text-[#A99DB5] mt-3 text-lg">
              Create your accont and start <br /> exploring a world of amazing music.
            </p>
          </div>

          {/* feature */}
          <div className="flex gap-5 mb-3 mt-4 ml-7">
            <div className="size-11 bg-purple-500 rounded-full flex justify-center items-center">
              <PiMusicNotesLight size={30} color="blue"/>
            </div>
            <div>
              <h4>Discover</h4>
              <p className="text-[#A99DB5]">Explore new songs and artists</p>
            </div>
          </div>

          <div className="flex gap-5 mb-3 ml-7">
            <div className="size-11 bg-pink-400 rounded-full flex justify-center items-center">
              < HiOutlineHeart  size={30} color="pink"/>
            </div>
            <div>
              <h4>Listen Anywhere</h4>
              <p className="text-[#A99DB5]">Play your favorite music anytime</p>
            </div>
          </div>

          <div className="flex gap-5 ml-7">
            <div className="size-11 bg-[#a065c2] rounded-full flex justify-center items-center">
              < SlPeople size={30} color="cyan"/>
            </div>
            <div>
              <h4>Be Part of it</h4>
              <p className="text-[#A99DB5]">Join a growing music community</p>
            </div>
          </div>

          {/* hero-images */}
          <div className="flex">
          <img src="/images/styletext.png" alt="" height={270} width={320}/>
            <img src="/images/headphone.png" alt="" height={270} width={320}/>
          </div>
        </div>

        {/* right container */}
        <div className="flex justify-center items-center">
        <div className="bg-[#1a1919] h-140 w-110 rounded-2xl flex justify-center items-center">
          <div>
            {/* heading  */}
            <div className="mb-5">
              <h1 className="text-2xl font-semibold ">Create Account </h1>
              <p className="text-[#A99DB5]">Join VibeBox and start your music journey </p>
            </div>
            {/* form */}
            <form action="">
              <label htmlFor="username">Username</label><br />
              <input type="text" placeholder="Enter your username"
               className="bg-[#282828] w-90 p-2 text-sm rounded-sm mb-4 mt-0.5"/><br />

              <label htmlFor="email">Email</label><br />
              <input type="email" placeholder="Enter your email"
              className="bg-[#282828] w-90 p-2 text-sm rounded-sm mb-4 mt-0.5" /><br />

              <label htmlFor="password">Password</label><br />
              <input type="password" placeholder="Create a password"
              className="bg-[#282828] w-90 p-2 text-sm rounded-sm mb-4 mt-0.5" /><br />

              <label htmlFor="confirpassword">Confirm Password</label><br />
              <input type="password" placeholder="Confirm your password"
              className="bg-[#282828] w-90 p-2 text-sm rounded-sm mb-4 mt-0.5" />
              <br />
              <button type="submit"
                className="bg-[#7207de] w-90 h-9 rounded-lg hover:bg-[#A855F7]"
              >Create Account</button>
            </form>
            {/* other */}
            <div>
              <p className=" text-sm mt-4 mb-4">
                -------------------------------- OR ------------------------------------
              </p>
              <p className="text-center">Already have an account? <span className="
              text-[#8211f3] hover:text-[#440489]">
                <a href="/login">Login</a></span></p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
     )
   }
   
   export default Register;