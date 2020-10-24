import React from 'react';
import {ArticleList, setURL} from '@instinct/frontend';
import {UserLayout} from '../../../components/layout/user';

setURL('community/news', <News />);

export function News() {
  return (
    <UserLayout>
      <ArticleList />
    </UserLayout>
  );
}
