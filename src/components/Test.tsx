'use client';

import { useFilters } from '~/hooks/use-filters';
import { Input } from './ui/Input';

export default function SortProducts() {
  const { filters, update, reset } = useFilters();

  return (
    <>
      <Input
        name="id"
        value={filters.get('id') || undefined}
        onChange={update}
      />
      <button onClick={() => update('sort', 'asc')}>Sort Ascending</button>
      <button onClick={() => update('sort', 'desc')}>Sort Descending</button>
      <select
        onChange={({ target }) => update('categoryId', target.value.toString())}
        value={filters.get('categoryId') || '1'}
      >
        <option value="1">Комнаты</option>
        <option value="2">Квартиры</option>
        <option value="3">Дома, дачи, котеджи</option>
        <option value="4">Комерция</option>
        <option value="5">Участки</option>
        <option value="6">Гаражи и машиноместа</option>
      </select>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
}
