import axios from 'axios';
import * as constants from './constants';

export interface Photo {
  id: string;
  alt: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

const photosAPI = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: { Authorization: `Client-ID ${constants.UNSPLASH_API_KEY}` },
});

export const getRandomPhotos = async () => {
  const res = await photosAPI.get(
    '/photos/random?query=sport&orientation=landscape&count=10'
  );

  const photos: Photo[] = (res.data || []).map((photo: any) => ({
    id: photo.id,
    alt: photo.alt_description || '',
    urls: photo.urls,
  }));

  return photos;
};
