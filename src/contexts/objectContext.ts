import { createContext, useContext } from 'react';

export interface ObjectContextType {
  objects: any[];
}

const ObjectContext = createContext<ObjectContextType | null>(null);

export const useObjectStore = () => {
  const objectContext = useContext(ObjectContext);

  if (!objectContext) {
    throw new Error('useObject has to be used within <ObjectContext.Provider>');
  }

  return objectContext;
};
