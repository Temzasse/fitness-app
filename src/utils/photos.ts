import axios from 'axios';
import * as constants from './constants';
import { hashCode } from './common';

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

export const preloadPhotos = (urls: string[]) => {
  urls.forEach((url) => {
    const id = hashCode(url);

    if (!document.getElementById(id)) {
      var link = document.createElement('link');
      link.id = id;
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    }
  });
};
