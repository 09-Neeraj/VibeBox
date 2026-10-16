import { Play } from "lucide-react";

function MusicCard({ music, onPlay }) {
  return (
    <div className="group min-w-0">
      {/* Cover */}
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img
          src={music.coverImage}
          alt={music.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        {/* Play Button */}
        <button
          onClick={() => onPlay(music)}
          className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-black/50 text-white backdrop-blur-sm transition hover:scale-110 hover:bg-purple-600"
        >
          <Play size={20} fill="currentColor" />
        </button>
      </div>

      {/* Song Info */}
      <div className="mt-3">
        <h3 className="truncate text-lg font-semibold text-white">
          {music.title}
        </h3>

        <p className="mt-1 truncate text-sm text-gray-400">
          {music.artist}
        </p>
      </div>
    </div>
  );
}

export default MusicCard;