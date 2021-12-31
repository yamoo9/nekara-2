import { Helmet } from 'react-helmet-async';
import { Headline } from './Home.styled';
import { setDocumentTitle } from 'utils';

export function Home() {
  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('홈')}</title>
      </Helmet>
      <Headline>홈</Headline>
    </>
  );
}
