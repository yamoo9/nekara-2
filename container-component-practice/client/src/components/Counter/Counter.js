import { useState } from 'react';
// import styled from 'styled-components';

export function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <button
        type="button"
        aria-label="카운트 감소"
        onClick={() => setCount(count - step)}
      >
        -
      </button>
      <output>{count}</output>
      <button
        type="button"
        aria-label="카운트 증가"
        onClick={() => setCount(count + step)}
      >
        +
      </button>
    </div>
  );
}
