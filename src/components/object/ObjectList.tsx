'use client';

import { useObjectList } from '~/components/object/ObjectListContext';
import ObjectCard from './ObjectCard';

export default function ObjectList() {
  const { objects } = useObjectList();

  return (
    <div>
      {objects.map((object: any) => (
        <ObjectCard key={object.id} object={object} />
      ))}
    </div>
  );
}
