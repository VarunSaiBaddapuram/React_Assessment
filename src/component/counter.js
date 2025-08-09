import { useState } from 'react';

export default function Counter({ onAdd }) {
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count > 0) {
      onAdd(count);
    }
  }

  return (
    <div className='counter'>
      <p>Counter</p>
      <div className='counter-control'>
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button className='add' onClick={handleAdd} disabled={count <= 0}>
        Add to List
      </button>
    </div>
  );
}
