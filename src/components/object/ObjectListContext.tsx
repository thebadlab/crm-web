'use client';

import { createContext, ReactNode, useContext } from 'react';

interface CurrentUserContextType {
  objects: any[];
}

const ObjectListContext = createContext<CurrentUserContextType | null>(null);

export default function ObjectListProvider({
  objects,
  children,
}: {
  objects: any[];
  children: ReactNode;
}) {
  console.log('objects', objects);

  return (
    <ObjectListContext.Provider value={{ objects }}>
      {children}
    </ObjectListContext.Provider>
  );
}

export const useObjectList = () => {
  const objectListContext = useContext(ObjectListContext);

  if (!objectListContext) {
    throw new Error(
      'useObjectList has to be used within <ObjectListContext.Provider>',
    );
  }

  return objectListContext;
};
