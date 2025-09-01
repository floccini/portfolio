import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `Giovanni Fossati | ${title}` : 'Giovanni Fossati';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}; 