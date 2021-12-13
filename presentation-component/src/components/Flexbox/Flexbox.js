// 가이드: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
import React from 'react';
import { Flexbox } from './flexbox';

<Flexbox.Container
  // direction="column"
  // wrap="wrap"
  flow="column wrap"
  justify="center"
  items="center"
  content="space-evenly"
  // gap={10}
  gap={{
    row: 10,
    column: 10,
  }}
>
  <Flexbox.Item
    order={-1}
    // grow={1}
    // shrink={0}
    // basis="30%"
    flex="1 0 30%"
    self="flex-end"
  ></Flexbox.Item>
</Flexbox.Container>;
