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
  bio: "· Co-Founder of Evano & Aesence.\r\n· Minimalist design lover & hobby photographer.\r\n";
  first_name: "Sarah";
  id: "J2vZstLiwhU";
  last_name: "Dorweiler";
  name: "Sarah Dorweiler";
  profile_image: {
    large: string;
    small: string;
    medium: string;
  };
  total_likes: 418;
  total_photos: 29;
  username: "sarahdorweiler";
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
