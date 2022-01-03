import 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import reactAuthorizedPath from './assets/react-authorized.png';
import { Figure, Cover, Caption } from './Authorized.styled';
import { setDocumentTitle } from 'utils';

export default function Authorized() {
  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('인증(Authorization)')}</title>
      </Helmet>

      <Figure>
        <Cover src={reactAuthorizedPath} alt="" />
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
            Authorization
          </strong>{' '}
          (인증)
        </Caption>
      </Figure>
    </>
  );
}
