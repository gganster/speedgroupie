import { create } from 'zustand'

const useSpotifyStore = create((set) => ({
  spotifyUrl: null,
  setSpotifyUrl: (url) => set({ spotifyUrl: url })
}));

export default useSpotifyStore;