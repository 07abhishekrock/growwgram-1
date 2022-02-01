export interface Feed {
  id: string;
  created_at: string;
  updated_at: string;
  color: string;
  downloads: number;
  likes: number;
  liked: boolean;
  alt_description: string;
  description: string;
  location: {
    name: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    download: string;
    download_location: string;
    html: string;
    self: string;
  };
  user: SuggestedUser;
  height: number;
  width: number;
}

export interface SuggestedUser {
  bio?: string;
  first_name?: string;
  id?: string;
  last_name?: string;
  name?: string;
  profile_image?: {
    large: string;
    small: string;
    medium: string;
  };
  total_likes?: number;
  total_photos?: number;
  username?: string;
}

export interface FeedState {
  loading: boolean;
  data: {
    feeds: Feed[];
    suggestedUsers: SuggestedUser[];
  };
  complete?: boolean;
  errors?: string;
  page: number;
}
