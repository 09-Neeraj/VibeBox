import { useEffect, useRef, useState } from "react";
import {
     Shuffle,
     SkipBack,
     Play,
     SkipForward,
     Repeat2,
     Volume2,
     Heart,
     Pause,
   } from "lucide-react";
   
   function MusicPlayer({ music }) {
     const audioRef = useRef(null);
   
     const [isPlaying, setIsPlaying] = useState(false);
     const [currentTime, setCurrentTime] = useState(0);
     const [duration, setDuration] = useState(0);
   
     // Jab selected song change ho
     useEffect(() => {
       if (!music || !audioRef.current) return;
   
       audioRef.current.src = music.uri;
       audioRef.current.load();
   
       setCurrentTime(0);
       setIsPlaying(false);
     }, [music]);
   
     // Play / Pause
     const handlePlayPause = () => {
       if (!audioRef.current) return;
   
       if (isPlaying) {
         audioRef.current.pause();
         setIsPlaying(false);
       } else {
         audioRef.current.play();
         setIsPlaying(true);
       }
     };
   
     // Audio ka current time
     const handleTimeUpdate = () => {
       setCurrentTime(audioRef.current.currentTime);
     };
   
     // Audio ki total duration
     const handleLoadedMetadata = () => {
       setDuration(audioRef.current.duration);
     };
   
     // Seconds ko mm:ss mein convert karna
     const formatTime = (time) => {
       if (!time || isNaN(time)) return "0:00";
   
       const minutes = Math.floor(time / 60);
       const seconds = Math.floor(time % 60);
   
       return `${minutes}:${seconds.toString().padStart(2, "0")}`;
     };
   
     // Progress bar par click
     const handleProgressChange = (e) => {
       const newTime = Number(e.target.value);
   
       audioRef.current.currentTime = newTime;
       setCurrentTime(newTime);
     };
   
     if (!music) return null;
   
     return (
       <>
         {/* Hidden Audio Element */}
         <audio
           ref={audioRef}
           onTimeUpdate={handleTimeUpdate}
           onLoadedMetadata={handleLoadedMetadata}
           onEnded={() => setIsPlaying(false)}
         />
   
         {/* Music Player */}
         <div className="fixed bottom-0 left-0 right-0 z-50 h-24 border-t border-gray-800 bg-[#0b0f14]/95 px-6 backdrop-blur-md">
   
           <div className="flex h-full items-center justify-between gap-6">
   
             {/* Song Info */}
             <div className="flex min-w-[230px] items-center gap-4">
   
               <img
                 src={music.coverImage}
                 alt={music.title}
                 className="h-16 w-16 rounded-lg object-cover"
               />
   
               <div className="min-w-0">
                 <h3 className="truncate font-semibold text-white">
                   {music.title}
                 </h3>
   
                 <p className="truncate text-sm text-gray-400">
                   {music.artist}
                 </p>
               </div>
   
               <button className="text-gray-400 hover:text-purple-500">
                 <Heart size={22} />
               </button>
             </div>
   
             {/* Controls */}
             <div className="flex flex-1 flex-col items-center gap-2">
   
               <div className="flex items-center gap-7">
   
                 <button className="text-gray-400 hover:text-white">
                   <Shuffle size={19} />
                 </button>
   
                 <button className="text-gray-300 hover:text-white">
                   <SkipBack size={22} fill="currentColor" />
                 </button>
   
                 {/* Play / Pause */}
                 <button
                   onClick={handlePlayPause}
                   className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white transition hover:scale-105"
                 >
                   {isPlaying ? (
                     <Pause size={22} fill="currentColor" />
                   ) : (
                     <Play size={22} fill="currentColor" />
                   )}
                 </button>
   
                 <button className="text-gray-300 hover:text-white">
                   <SkipForward size={22} fill="currentColor" />
                 </button>
   
                 <button className="text-gray-400 hover:text-white">
                   <Repeat2 size={19} />
                 </button>
   
               </div>
   
               {/* Progress */}
               <div className="flex w-full max-w-xl items-center gap-3">
   
                 <span className="w-8 text-xs text-gray-400">
                   {formatTime(currentTime)}
                 </span>
   
                 <input
                   type="range"
                   min="0"
                   max={duration || 0}
                   value={currentTime}
                   onChange={handleProgressChange}
                   className="h-1 flex-1 cursor-pointer accent-purple-500"
                 />
   
                 <span className="w-8 text-xs text-gray-400">
                   {formatTime(duration)}
                 </span>
   
               </div>
   
             </div>
   
             {/* Volume */}
             <div className="flex min-w-[180px] items-center justify-end gap-3">
   
               <Volume2 size={21} className="text-gray-300" />
   
               <input
                 type="range"
                 min="0"
                 max="1"
                 step="0.01"
                 defaultValue="0.65"
                 onChange={(e) => {
                   audioRef.current.volume = Number(e.target.value);
                 }}
                 className="w-32 cursor-pointer accent-purple-500"
               />
   
             </div>
   
           </div>
         </div>
       </>
     );
   }
   

   
   export default MusicPlayer;