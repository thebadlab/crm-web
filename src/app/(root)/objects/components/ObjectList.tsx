'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const ObjectList = ({ objects }: { objects: any[] }) => {
  const searchParams = useSearchParams();
  const [firstMount, setFirstMount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState(objects);

  useEffect(() => {
    const controller = new AbortController();

    const apiCall = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
          {
            signal: controller.signal,
          },
        );
        const data = await response.json();

        // setTimeout(() => {
        setItems(data);
        setIsLoading(false);
        // }, 3000);
      } catch (error) {
        if (!controller.signal?.aborted) {
          setIsLoading(false);
          console.error('error', error);
        }
      }
    };

    if (firstMount) {
      console.log('fetch');
      apiCall();
    }

    return () => {
      controller.abort();
    };
  }, [searchParams]);

  useEffect(() => {
    console.log('first');
    setFirstMount(true);
  }, []);

  return (
    <div>
      {isLoading && <div className="">loading...</div>}
      {!isLoading &&
        items.map((item) => <ObjectCard key={item.id} item={item} />)}
    </div>
  );
};

export const ObjectCard = ({ item }: { item: any }) => {
  return <div>{item.id}</div>;
};
