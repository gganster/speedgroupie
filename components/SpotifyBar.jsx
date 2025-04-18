"use client";

import { Spotify } from "react-spotify-embed";
import useSpotifyStore from "@/context/spotify";

//use spotify API and iframe to provide a spotify footer bar with play and pause functionality
//

export default function SpotifyBar() {
  const spotifyUrl = useSpotifyStore((state) => state.spotifyUrl);

  if (!spotifyUrl) {
    return null; // Don't render the Spotify bar if no URL is provided
  }

  return (
    <div className="fixed bottom-12 left-12 right-12">
      <Spotify wide link={spotifyUrl} />
    </div>
  )
}