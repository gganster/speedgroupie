"use client";

import { Spotify } from "react-spotify-embed";

//use spotify API and iframe to provide a spotify footer bar with play and pause functionality
//

export default function SpotifyBar() {
  return (
    <div className="fixed bottom-8 left-8 right-8">
      <Spotify wide link="https://open.spotify.com/intl-fr/artist/2vaWvC8suCFkRXejDOK7EE" />
    </div>
  )
}