import { Helmet } from 'react-helmet-async';
import { setDocumentTitle } from 'utils';
import pageNotFoundPath from './assets/page-not-found.gif';
import { Container, Figure, Image, Caption } from './PageNotFound.styled';

export default function PageNotFound(props) {
  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('찾는 페이지가 없습니다')}</title>
      </Helmet>
      <Container role="alert">
        <Figure>
          <Image src={pageNotFoundPath} alt="" />
          <Caption>페이지를 찾을 수 없습니다.</Caption>
        </Figure>
      </Container>
    </>
  );
}
