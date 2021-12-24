import { useState, useCallback } from 'react';
import { StyledContainer, StyledOutput, StyledButton } from './Counter.styled';

export function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount);
  const [temp, setTemp] = useState('');

  const decrement = useCallback(() => setCount(count - step), [count, step]);
  const increment = useCallback(() => setCount(count + step), [count, step]);

  return (
    <StyledContainer flex>
      <StyledButton type="button" aria-label="카운트 감소" onClick={decrement}>
        -
      </StyledButton>
      <StyledOutput onClick={() => setTemp((Math.random() * 10).toString())}>
        {count} {temp}
      </StyledOutput>
      <StyledButton type="button" aria-label="카운트 증가" onClick={increment}>
        +
      </StyledButton>
    </StyledContainer>
  );
}
