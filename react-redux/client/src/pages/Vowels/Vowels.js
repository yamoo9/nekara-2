import { Loading } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useGetVowelsQuery } from 'services/vowels';
import { setDocumentTitle } from 'utils';

function Vowels() {
  const { isLoading, data, error } = useGetVowelsQuery();

  if (isLoading) {
    return <Loading message="한글 모음 정보를 로딩 중입니다." />;
  }

  if (error) {
    return <div role="alert">{error.message}</div>;
  }

  return (
    <>
      <Helmet>
        <title>{setDocumentTitle('모음(Vowels) 리스트')}</title>
      </Helmet>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/vowel/${item.id}`}>
              <pre>{item.name}</pre>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Vowels;
