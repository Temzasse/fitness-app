import * as React from 'react';
import throttle from 'lodash.throttle';

const getId = (idSuffix: string | number) => `scroll-restoration-${idSuffix}`;

export function restoreScroll(idSuffix: string | number) {
  const id = getId(idSuffix);
  const persistedScroll = sessionStorage.getItem(id);
  if (!persistedScroll) return window.scrollTo(0, 0);

  try {
    const { x, y } = JSON.parse(persistedScroll);
    window.scrollTo(x, y);
  } catch (error) {
    sessionStorage.removeItem(id);
  }
}

export function clearPersistedScroll(idSuffix: string | number) {
  const id = getId(idSuffix);
  sessionStorage.removeItem(id);
}

export function useScrollRestoration(
  idSuffix: string | number,
  disabled = false
) {
  const id = getId(idSuffix);

  React.useLayoutEffect(() => {
    if (!disabled) restoreScroll(idSuffix);
  }, [idSuffix, disabled]);

  React.useEffect(() => {
    if (!disabled) {
      const throttled = throttle((scroll: { x: number; y: number }) => {
        sessionStorage.setItem(id, JSON.stringify(scroll));
      }, 100);

      const handleScroll = () => {
        throttled({ x: window.scrollX, y: window.scrollY });
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        throttled.cancel();
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [id, disabled]);
}

export const useScrollIntoView = (id?: string) => {
  React.useEffect(() => {
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
      }
    }
  }, [id]);
};


// Source: https://markus.oberlehner.net/blog/simple-solution-to-prevent-body-scrolling-on-ios/
const $body = document.querySelector('body') as HTMLBodyElement;
let scrollPosition = 0;

export const scrollLock = {
  enable() {
    scrollPosition = window.pageYOffset;
    $body.style.overflow = 'hidden';
    $body.style.position = 'fixed';
    $body.style.top = `-${scrollPosition}px`;
    $body.style.width = '100%';
  },
  disable() {
    $body.style.removeProperty('overflow');
    $body.style.removeProperty('position');
    $body.style.removeProperty('top');
    $body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
  },
};
