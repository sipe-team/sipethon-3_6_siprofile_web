import { ReactElement } from 'react';

export type CreateCardContextType = {
  name: string;
  position: string;
  keyword: Array<string>;
  link: string;
  color: string;
  setName: (name: string) => void;
  setPosition: (position: string) => void;
  setKeyword: (keyword: Array<string>) => void;
  setLink: (link: string) => void;
  setColor: (color: string) => void;
};

export type PageHistoryContextType = {
  pageHistory: Array<ReactElement>;
  setPageHistory: (pageHistory: Array<ReactElement>) => void;
};
