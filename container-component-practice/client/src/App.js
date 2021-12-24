import { SkHeading, SkLoading } from 'components';
import { useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <SkHeading as="h3">gateway</SkHeading>
      {isLoading && <SkLoading type="grow" />}
    </>
  );
}
