import React from 'react';

// Hooks ------------------------------------------------

export const usePrevious = <T>(state: T): T | undefined => {
  const ref = React.useRef<T>();

  React.useEffect(() => {
    ref.current = state;
  });

  return ref.current;
};

// Other ------------------------------------------------

export const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export const range = (num: number) => Array.from({ length: num }, (x, i) => i);

export const isPWA = () => {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    return true;
  }
  return false;
};

export const randomNumBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const truncate = (str: string, len: number) => {
  if (str.length > len) return `${str.substring(0, len - 3)}...`;
  return str;
};

export const noop = (...arg: any[]) => {};

export const byDateSort = (a: any, b: any) => {
  return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
};

export const byNameSort = (a: { name: string }, b: { name: string }) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

export const sleep = (ms = 500) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const hashCode = (s: string) => {
  return s
    .split('')
    .reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0)
    .toString();
};

export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

