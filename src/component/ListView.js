export default function ListView({ numbers, onDelete, onReset, onToggle, sort }) {
  const sortedList = [...numbers].sort((a, b) =>
    sort === 'asc' ? a - b : b - a
  );

  return (
    <div className='list'>
      <div className='list-head'>
        <p>Numbers List</p>
        <div className='list-action'>
          <button className='reset' onClick={onReset}>Reset</button>
          <button className='sort' onClick={onToggle}>
            Sort {sort === 'asc' ? '↑' : '↓'}
          </button>
        </div>
      </div>
      <ul>
        {sortedList.map((num, idx) => {
          const max = Math.max(...sortedList);
          const min = Math.min(...sortedList);
          const highlight =
            num === max
              ? { backgroundColor: 'rgba(0, 255, 0, 0.15)', borderRadius: '4px' }
              : num === min
              ? { backgroundColor: 'rgba(255, 0, 0, 0.15)', borderRadius: '4px' }
              : {};

          return (
            <li key={idx} style={highlight}>
              <div>
                {num} <span>#{idx + 1}</span>
              </div>
              <button onClick={() => onDelete(idx)}>x</button>
            </li>
          );
        })}
      </ul>
      <p className="total">Total numbers: {numbers.length}</p>
    </div>
  );
}
