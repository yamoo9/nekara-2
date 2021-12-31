import { useEffect } from 'react';
import { Headline } from './Home.styled';
import { setDocumentTitle } from 'utils';

export function Home() {
  useEffect(() => {
    setDocumentTitle('홈');
  }, []);

  return (
    <>
      <Headline>홈</Headline>
    </>
  );
}
