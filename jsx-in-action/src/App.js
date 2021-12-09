/* eslint-disable no-unused-vars */
import React, { Fragment as Template } from 'react';
import { isObject, isArray } from './utils';
import {
  EmojiOops,
  List,
  PrettyPrintCode,
  Container,
  Headline,
  GlobalNav,
  DescList,
} from './components';

/* -------------------------------------------------------------------------- */

let error = null;

/* -------------------------------------------------------------------------- */

const ConditionalRendering = () => {
  // nullish ??
  error ?? console.log('현재 앱에는 오류(error)가 발생하지 않았습니다.');

  // optional chaining ?.
  error?.log?.();

  return (
    <div className="container">
      <h1 className="headline">
        {!error ? 'React 조건부 렌더링' : <EmojiOops height={200} />}
      </h1>
      <p className={error && 'error-message'}>
        {!error
          ? '오류가 존재하면 렌더링 되도록 코드를 작성합니다.'
          : error.message}
      </p>
    </div>
  );
};

/* -------------------------------------------------------------------------- */

const db = require('./api/db.json');

const {
  navigation: { items: list },
} = db;

const renderList = (list) => {
  return list.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.link}>{item.text}</a>
      </li>
    );
  });
};

const ListRedering = () => {
  return (
    <Container>
      <Headline>React 리스트 렌더링 (배열)</Headline>

      {/* 배열 리스트 렌더링 */}
      <GlobalNav>
        {/* 웹 표준을 준수해 비순차 목록을 화면에 출력해봅니다. */}
        {/* renderList(list) 함수를 실행해 리스트 렌더링 처리해봅니다. */}
        {/* <ul>{renderList(list)}</ul> */}
        <List>
          {list.map((item, index) => (
            <List.Item key={index} link={item.link} text={item.text} />
          ))}
        </List>
      </GlobalNav>

      {/* 객체 리스트 렌더링 */}
      <DescList>
        {Object.entries(db).map(([key, value]) => {
          return (
            <Template key={key}>
              <dt>{key}</dt>
              <dd>
                {isObject(value) || isArray(value) ? (
                  <PrettyPrintCode code={value} />
                ) : (
                  value
                )}
              </dd>
            </Template>
          );
        })}
        {/* 웹 표준을 준수해 설명 목록을 화면에 출력해봅니다. */}
        {/* `db` 객체의 "속성", "값" 쌍을 순환하여 리스트 렌더링 해보세요. */}
        {/* 값의 유형이 객체 또는 배열인 경우, 코드가 화면에 출력되도록 설정합니다. */}
        {/* `isArray`, `isObject` 유틸리티 함수를 만들어 활용하세요. */}
        {/* 코드를 화면에 출력할 때는 <PrettyPrintCode /> 컴포넌트를 활용합니다. (`code` 속성) */}
        {/* <PrettyPrintCode code={db} /> */}
      </DescList>
    </Container>
  );
};

/* -------------------------------------------------------------------------- */

export { ListRedering };
