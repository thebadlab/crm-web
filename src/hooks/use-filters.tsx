import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export const useFilters = () => {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState(searchParams);

  useEffect(() => {
    setFilters(searchParams);
  }, [searchParams]);

  const update = (name: string, value: string) => {
    const params = new URLSearchParams(filters.toString());
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    window.history.pushState(null, '', `?${params.toString()}`);
  };

  const reset = () => {
    const params = new URLSearchParams('');
    window.history.pushState(null, '', `?${params.toString()}`);
  };

  return {
    filters,
    update,
    reset,
  };
};
