import { useState,useEffect } from 'react';
import Counter from './component/counter';
import ListView from './component/ListView';
import './App.css';

export default function App() {
  const [nums, setNums] = useState(()=>{
    const saved = localStorage.getItem('numbers');
    return saved ? JSON.parse(saved) : [];

  });
  const [sort, setSort] = useState('desc');

  useEffect(() => {
    localStorage.setItem('numbers', JSON.stringify(nums));
  }, [nums]);

  function handleAdd(num) {
    setNums([...nums, num]);
  }

  function handleDelete(index) {
    setNums(nums.filter((_, i) => i !== index));
  }

  function handleReset() {
    setNums([]);
  }

  function handleToggle() {
    setSort(sort === 'desc' ? 'asc' : 'desc');
  }

  return (
    <>
      <h1>Counter & List App</h1>
      <Counter onAdd={handleAdd} />
      <ListView
        numbers={nums}
        onDelete={handleDelete}
        onReset={handleReset}
        onSortToggle={handleToggle}
        sortOrder={sort}
      />
    </>
  );
}

