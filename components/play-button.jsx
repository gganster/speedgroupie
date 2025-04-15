"use client";

import useSpotifyStore from "@/context/spotify";
import spotify from "./spotify";

export default function PlayButton({ id }) {
  const setSpotifyUrl = useSpotifyStore((state) => state.setSpotifyUrl);

  console.log(spotify[id]);
  
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="rounded-full border-gray-300 border-2">
        <svg
          onClick={() => {setSpotifyUrl(spotify[id])}}
          width="64"
          height="64"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: 'pointer' }}
        >
          {/* Cercle de fond */}
          <circle cx="32" cy="32" r="30" fill="#101828" />
          {/* Triangle Play */}
          <polygon points="26,20 26,44 46,32" fill="#fff" />
        </svg>
      </div>
    </div>
  )
}