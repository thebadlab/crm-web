'use client';

type Actions = {
  selectObject: () => void;
  openMap: () => void;
};

export default function ObjectCard({ object }: { object: any }) {
  return (
    <div>
      {object.id}. {object.title}
    </div>
  );
}
