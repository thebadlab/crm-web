'use client';

import type { ChangeEvent } from 'react';

export const Input = ({
  name,
  value,
  onChange,
}: {
  name: string;
  value?: string;
  onChange: (name: string, value: string) => void;
}) => {
  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(name, event.target.value);
  };

  return (
    <div>
      <input type="text" defaultValue={value} onChange={handelChange} />
    </div>
  );
};
