import { useState, useEffect } from "react";
import axios from "axios";
import {
  Home as HomeIcon,
  Search,
  Library,
  User,
  LogOut,
  Bell,
  ChevronDown,
} from "lucide-react";

import MusicCard from "../../components/musicCard";
import MusicPlayer from "../../components/musicPlayer";



function Home() {
  const [musicList, setMusicList]= useState([])
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [loading, setLoading]= useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/music",
          {
            withCredentials:true,
          }
        );
  
        setMusicList(response.data.musics);
      } catch (error) {
        console.log(error);
  
        setError("authentication require");
      } finally {
        setLoading(false);
      }
    };
  
    fetchMusic();
  }, []);
  return (

    <div className="min-h-screen bg-[#0d1117] text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-gray-800 bg-[#0b0f14] px-5 py-7">

        {/* Logo */}
        <div className="mb-10 flex items-center gap-2 px-3">
          <span className="text-3xl text-purple-500">♫</span>

          <h1 className="text-2xl font-bold">
            Vibe<span className="text-purple-500">Box</span>
          </h1>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-2">
       

          {/* Home */}
          <a
            href="#"
            className="flex items-center gap-5 rounded-xl bg-purple-600/30 px-5 py-4 text-white"
          >
            <HomeIcon size={24} />
            <span className="text-lg">Home</span>
          </a>

          {/* Search */}
          <a
            href="#"
            className="flex items-center gap-5 rounded-xl px-5 py-4 text-gray-300 transition hover:bg-white/5 hover:text-white"
          >
            <Search size={24} />
            <span className="text-lg">Search</span>
          </a>

          {/* Library */}
          <a
            href="#"
            className="flex items-center gap-5 rounded-xl px-5 py-4 text-gray-300 transition hover:bg-white/5 hover:text-white"
          >
            <Library size={24} />
            <span className="text-lg">Library</span>
          </a>

        </nav>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700" />

        {/* Bottom Navigation */}
        <nav className="space-y-2">

          {/* Profile */}
          <a
            href="#"
            className="flex items-center gap-5 rounded-xl px-5 py-4 text-gray-300 transition hover:bg-white/5 hover:text-white"
          >
            <User size={24} />
            <span className="text-lg">Profile</span>
          </a>

          {/* Logout */}
          <button
            className="flex w-full items-center gap-5 rounded-xl px-5 py-4 text-gray-300 transition hover:bg-white/5 hover:text-white"
          >
            <LogOut size={24} />
            <span className="text-lg">Logout</span>
          </button>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen p-8">
        {/* Topbar */}
    <header className="mb-8 flex items-center justify-between">

      {/* Search */}
      <div className="relative w-full max-w-lg">
        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search for songs, artists..."
          className="w-full rounded-full bg-[#202631] py-4 pl-14 pr-5 text-gray-200 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* User Section */}
      <div className="ml-6 flex items-center gap-5">

        {/* Notification */}
        <button className="text-gray-300 transition hover:text-white">
          <Bell size={25} />
        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          {/* Avatar */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-lg font-semibold">
            R
          </div>

          {/* Name */}
          <span className="font-medium text-white">
            Rahul
          </span>

          {/* Dropdown */}
          <ChevronDown
            size={20}
            className="text-gray-400"
          />

        </div>

      </div>

    </header>

    {/* Hero Banner */}
<section className="relative mt-6 h-[370px] overflow-hidden rounded-2xl">
  
  {/* Background Image */}
  <img
    src="/images/home-bg.png"
    alt="Music background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#080b12] via-[#080b12]/70 to-transparent" />

  {/* Hero Content */}
  <div className="relative z-10 flex h-full items-center px-9">
    <div className="max-w-xl">

      <h2 className="text-5xl font-bold text-white">
        Good Music
      </h2>

      <h3 className="mt-1 text-5xl font-bold text-purple-500">
        Better Days
      </h3>

      <p className="mt-6 max-w-lg text-lg leading-7 text-gray-300">
        Discover, play and enjoy your favorite songs
        anytime, anywhere.
      </p>

      <button className="mt-6 flex items-center gap-3 rounded-xl bg-purple-600 px-7 py-4 font-semibold text-white transition hover:bg-purple-700">
        <span className="text-xl">▶</span>
        Start Listening
      </button>

    </div>
  </div>

</section>

{/* Recently Added */}
<section className="mt-8">

  <div className="mb-5 flex items-center justify-between">
    <h2 className="text-3xl font-bold text-white">
      Recently Added
    </h2>

    <button className="text-purple-500 transition hover:text-purple-400">
      See All →
    </button>
  </div>

  {loading ? (
    <p className="text-gray-400">Loading music...</p>
  ) : error ? (
    <p className="text-red-400">{error}</p>
  ) : musicList.length === 0 ? (
    <p className="text-gray-400">No music available.</p>
  ) : (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
      {musicList.map((music) => (
        <MusicCard
          key={music._id}
          music={music}
          onPlay={(selectedMusic) => {
            setSelectedMusic(selectedMusic);
          }}
        />
      ))}
    </div>
  )}

</section>
          </main>
          <MusicPlayer
                music={selectedMusic}
               
          />
        </div>
      );
    }

export default Home;