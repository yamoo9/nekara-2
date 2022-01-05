import { Loading } from 'components';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useGetVowelQuery } from 'services/vowels';
import { setDocumentTitle } from 'utils';

function Vowel(props) {
  const param = useParams();
  const { isLoading, data, error } = useGetVowelQuery(param.id);

  if (isLoading) {
    return <Loading message="한글 모음 정보를 로딩 중입니다." />;
  }

  if (error) {
    return <div role="alert">{error.message}</div>;
  }

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle(`모음(Vowel) ${data.name}`)}</title>
      </Helmet>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default Vowel;
