export interface SpotifyArtist {
  name: string;
}

export interface SpotifyImage {
  url: string;
}

export interface SpotifyAlbum {
  images: SpotifyImage[];
}

export interface SpotifyTrackItem {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  duration_ms: number;
  id: string;
  name: string;
}

export interface SpotifyCurrentlyPlaying {
  is_playing: boolean;
  progress_ms: number;
  item: SpotifyTrackItem | null;
}

export interface SpotifyApiResponse {
  track?: SpotifyCurrentlyPlaying;
  is_playing?: boolean;
  isPlaying?: boolean;
}
