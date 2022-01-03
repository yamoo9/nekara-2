import 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import reactHomePath from './assets/react-home.png';
import { Figure, Cover, Caption } from './Home.styled';
import { setDocumentTitle } from 'utils';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('홈')}</title>
      </Helmet>
      <Figure>
        <Cover src={reactHomePath} alt="" />
        <Caption
          css={`
            font-weight: 300;
          `}
        >
          React{' '}
          <strong
            css={`
              font-weight: 900;
            `}
          >
            Context API
          </strong>{' '}
          활용
        </Caption>
      </Figure>
    </>
  );
}
