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
