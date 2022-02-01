import { Feed } from "..";

export interface User {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  followers_count: number;
  following_count: number;
  downloads: number;
  social: {
    instagram_username: string;
    twitter_username: string;
  };
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
  };
}

export interface UserState {
  loading: boolean;
  data: {
    user: User | null;
    photos: Feed[];
  };
  complete?: boolean;
  errors?: Error | null;
  page: number;
}
